import { type ComponentPropsWithRef, useId, forwardRef, type Ref } from "react";
import { FieldError } from "react-hook-form";

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
    <div className="flex w-full flex-wrap items-center justify-center">
      <label className="hidden dark:text-white" htmlFor={id}>
        {label}
      </label>
      <input
        className="w-full rounded-md border border-gray-300 px-2 py-1"
        placeholder={label}
        id={id}
        ref={ref}
        {...rest}
      />
      {error && (
        <p className="mt-1 w-full text-xs text-red-500">{error.message}</p>
      )}
    </div>
  );
});
