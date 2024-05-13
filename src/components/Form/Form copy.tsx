import { useEffect, useState, type FocusEventHandler } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Input } from "../../ui";
import { type FormData, validationSchema } from "./types";

export function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
    resolver: zodResolver(validationSchema),
  });

  // const [localData, setLocalData] = useState("");

  const name = watch().name;

  console.log();

  const handleSubmitForm: SubmitHandler<FormData> = (data) => {
    console.log(`data: ${data}`);
  };

  const handleOnBlur: FocusEventHandler<HTMLInputElement> = () => {
    const time = `${new Date().toLocaleDateString()}-${new Date().toLocaleTimeString()}`;

    if (!errors.name) {
      localStorage.setItem(time, name);
    }
  };

  return (
    <div>
      <form
        className="flex w-96 flex-col items-center rounded-lg bg-slate-300 p-10"
        onSubmit={handleSubmit(handleSubmitForm)}
        noValidate
      >
        <Input
          label="Name"
          onBlurCapture={handleOnBlur}
          {...register("name")}
          error={errors.name}
        />

        <Button label="Send" type="submit" />
      </form>
      {/* {localData && localData} */}
    </div>
  );
}
