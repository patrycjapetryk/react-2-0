import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Input } from "../../ui";
import { type UserData, validationSchema } from "./types";

export function AddUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: zodResolver(validationSchema),
  });

  const handleAddUserForm: SubmitHandler<UserData> = (data) => {
    console.log(data);
  };

  return (
    <form
      className="mt-10 grid grid-cols-3 gap-3"
      onSubmit={handleSubmit(handleAddUserForm)}
      noValidate
    >
      <Input label="Name" {...register("name")} error={errors.name} />
      <Input label="Age" {...register("age")} error={errors.age} />

      <Button label="Add user" type="submit" />
    </form>
  );
}
