import { type MouseEventHandler } from "react";

import { Button } from "../../../ui";
import { type AllFormsData } from "../FormWizard";

type Props = {
  prevForm: () => void;
  formsData: AllFormsData;
};

export function FormSummary({ prevForm, formsData }: Props) {
  const { name, surname, hobby, date } = formsData;

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = () => {
    console.log(formsData);
  };

  return (
    <div className="w-96 rounded-lg bg-slate-300 p-10">
      <article className="mb-10 grid grid-cols-2 gap-10">
        <div>
          <p>Name: {name}</p>
          <p>Surname: {surname}</p>
        </div>
        <div>
          <p>Date: {date}</p>
          <p>Hobby: {hobby}</p>
        </div>
      </article>

      <div className="flex justify-between">
        <Button label="Prev" onClick={prevForm} />
        <Button label="Submit" onClick={handleSubmit} />
      </div>
    </div>
  );
}
