import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Input } from "../../../ui";
import { type FormData, validationSchema } from "./types";
import { type AllFormsData } from "../FormWizard";

type Props = {
  nextForm: () => void;
  addData: (newData: FormData) => void;
  formsData: AllFormsData;
};

export function FormStepOne({ nextForm, addData, formsData }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(validationSchema),
  });

  const handleForm: SubmitHandler<FormData> = (data) => {
    const { name, surname } = data;
    addData({ name: name, surname: surname });

    nextForm();
  };

  return (
    <form
      className="w-96 rounded-lg bg-slate-300 p-10"
      onSubmit={handleSubmit(handleForm)}
      noValidate
    >
      <Input
        label="Name"
        {...register("name")}
        defaultValue={formsData.name}
        error={errors.name}
      />
      <Input
        label="Surname"
        {...register("surname")}
        defaultValue={formsData.surname}
        error={errors.surname}
      />

      <div className="flex justify-end">
        <Button label="Next" type="submit" />
      </div>
    </form>
  );
}
