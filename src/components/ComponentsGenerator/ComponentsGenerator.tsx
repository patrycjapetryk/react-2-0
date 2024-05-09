import { type FormEventHandler, useState, useRef } from "react";

import { Button } from "../../ui";
import { ComponentGeneratorOutput } from "./ComponentGeneratorOutput";
import { ComponentGeneratorData } from "./ComponentGeneratorData";

export function ComponentsGenerator() {
  const componentFieldRef = useRef<HTMLSelectElement>(null);
  const [componentName, setComponentName] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const selectedComponent = componentFieldRef.current?.value || "";
    setComponentName(selectedComponent);
  };

  return (
    <section className="flex w-full max-w-[600px] flex-col gap-6 rounded-lg bg-slate-300 p-10">
      <form
        className="flex items-center justify-between gap-6"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-6">
          <label htmlFor="component">Choose component:</label>

          <select name="components" id="components" ref={componentFieldRef}>
            <option value="">--Choose option--</option>
            {ComponentGeneratorData.map(({ componentName }, index) => {
              return (
                <option key={`option-${index}`} value={componentName}>
                  {componentName}
                </option>
              );
            })}
          </select>
        </div>

        <Button label="Generate.." greenColor />
      </form>

      {componentName && (
        <div className="flex flex-col gap-6">
          {ComponentGeneratorData.map((item) => {
            if (item.componentName === componentName) {
              return (
                <pre className="max-w-full overflow-auto rounded-lg bg-gray-700 p-6">
                  <code className="text-white">{item.componentCode}</code>
                </pre>
              );
            }
          })}

          <ComponentGeneratorOutput componentName={componentName} />
        </div>
      )}
    </section>
  );
}
