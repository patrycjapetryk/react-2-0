import { useEffect, useState, type FocusEventHandler } from "react";

import { Input } from "../../ui";
import { type FormData, validationSchema } from "./types";

export function Form() {
  const [items, setItems] = useState<FormData>([]);

  useEffect(() => {
    // localStorage.clear();

    const localHistory = localStorage.getItem("nameHistory");
    const localItems = localHistory && JSON.parse(localHistory);

    const { success } = validationSchema.safeParse(localItems);
    if (success) setItems(localItems);
  }, []);

  const handleOnBlur: FocusEventHandler<HTMLInputElement> = (data) => {
    const item = [
      {
        name: data.target.value,
        time: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
      },
    ];

    const { success } = validationSchema.safeParse(item);

    if (success) {
      const newItems = [...items, ...item];
      localStorage.setItem("nameHistory", JSON.stringify(newItems));
      setItems(newItems);
    }
  };

  return (
    <div>
      <form className="mb-6 flex w-96 flex-col items-center rounded-lg bg-slate-300 p-10">
        <Input label="Name" onBlurCapture={handleOnBlur} />
      </form>
      {items.map((item) => {
        return (
          <p key={item.time} className="mt-2">
            {item.time} {item.name}
          </p>
        );
      })}
    </div>
  );
}
