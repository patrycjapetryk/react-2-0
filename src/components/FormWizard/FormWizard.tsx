import { type MouseEventHandler, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 as uuidv4 } from "uuid";

import { Button, Input, Text } from "../../ui";
import { type RegistrationFormData, validationSchema } from "./types";

type Hobbies = {
  id: string;
}[];

export function FormWizard() {
  const [allHobbies, setAllHobbies] = useState<Hobbies>([]);

  const {
    register,
    unregister,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(validationSchema),
  });

  const handleRegistrationForm: SubmitHandler<RegistrationFormData> = (
    data,
  ) => {
    console.log(`allHobbies`);
    console.log(allHobbies);

    console.log(`data`);
    console.log(data);
  };

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    setAllHobbies((allHobbies) => [...allHobbies, { id: uuidv4() }]);
  };

  const handleRemove = (id: string) => {
    unregister("hobbies");
    setAllHobbies((allHobbies) =>
      [...allHobbies].filter((item) => item.id !== id),
    );
  };

  return (
    <form
      className="w-96 rounded-lg bg-slate-300 p-10"
      onSubmit={handleSubmit(handleRegistrationForm)}
      noValidate
    >
      <Input label="Name" {...register("name")} error={errors.name} />
      <Input label="Surname" {...register("surname")} error={errors.surname} />

      <div className="mb-10">
        <Text>Hobbies:</Text>
        <button className="underline" onClick={handleClick} type="button">
          + Add hobby
        </button>
      </div>

      {allHobbies.map((item, index) => {
        return (
          <div key={item.id} className="relative">
            <Input
              label="Hobby"
              {...register(`hobbies.${index}.hobby`)}
              error={errors.hobbies?.[index]?.hobby}
            />
            <button
              className="absolute right-1 top-0"
              onClick={() => handleRemove(item.id)}
              type="button"
            >
              X
            </button>
          </div>
        );
      })}

      <Button label="Send" type="submit" />
    </form>
  );
}
