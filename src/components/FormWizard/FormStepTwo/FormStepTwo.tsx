import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Input } from "../../../ui";
import { type FormData, validationSchema } from "./types";
import { type AllFormsData } from "../FormWizard";

type Props = {
  prevForm: () => void;
  nextForm: () => void;
  addData: (newData: FormData) => void;
  formsData: AllFormsData;
};

export function FormStepTwo({ prevForm, nextForm, addData, formsData }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(validationSchema),
  });

  const handleForm: SubmitHandler<FormData> = (data) => {
    const { hobby, date } = data;
    addData({ date: date, hobby: hobby });

    nextForm();
  };

  return (
    <form
      className="w-96 rounded-lg bg-slate-300 p-10"
      onSubmit={handleSubmit(handleForm)}
      noValidate
    >
      <Input
        label="Hobby"
        {...register("hobby")}
        defaultValue={formsData.hobby}
        error={errors.hobby}
      />

      <Input
        label="Date"
        type="date"
        {...register("date")}
        defaultValue={formsData.date}
        error={errors.hobby}
      />

      <div className="flex justify-between">
        <Button label="Prev" onClick={prevForm} />
        <Button label="Next" type="submit" />
      </div>
    </form>
  );
}
