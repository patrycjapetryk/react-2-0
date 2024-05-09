import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Input } from "../../ui";
import { type RegistrationFormData, validationSchema } from "./types";

export function FormWizard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(validationSchema),
  });

  const handleRegistrationForm: SubmitHandler<RegistrationFormData> = (
    data,
  ) => {
    console.log(data);
  };

  return (
    <form
      className="w-96 rounded-lg bg-slate-300 p-10"
      onSubmit={handleSubmit(handleRegistrationForm)}
      noValidate
    >
      <Input label="Name" {...register("name")} error={errors.name} />
      <Input label="Surname" {...register("surname")} error={errors.surname} />

      <Button label="Send" type="submit" />
    </form>
  );
}
