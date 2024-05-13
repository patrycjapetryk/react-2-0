import { type ComponentPropsWithRef, useId, forwardRef, type Ref } from "react";
import { type FieldError } from "react-hook-form";

type Props = {
  label: string;
  error?: FieldError;
} & ComponentPropsWithRef<"input">;

export const Input = forwardRef(function (
  { label, error, ...rest }: Props,
  ref: Ref<HTMLInputElement>,
) {
  const id = useId();

  return (
    <div className="mb-6 grid grid-cols-2 gap-6">
      <label className="dark:text-white" htmlFor={id}>
        {label}
      </label>
      <input id={id} ref={ref} {...rest} />
      {error && (
        <p className="col-span-2 text-center text-red-500">{error.message}</p>
      )}
    </div>
  );
});
