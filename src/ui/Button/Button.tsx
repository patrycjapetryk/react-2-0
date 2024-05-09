import { type ComponentProps } from "react";
import { cn } from "../../utils/cn";

type Props = {
  label: string;
  greenColor?: boolean;
  redColor?: boolean;
} & ComponentProps<"button">;

export function Button({
  label,
  greenColor,
  redColor,
  className,
  ...spread
}: Props) {
  return (
    <button
      className={cn(
        "m-1 cursor-pointer rounded-md border-0 bg-blue-600 px-8 py-2 text-xs uppercase text-white hover:bg-blue-700 disabled:bg-slate-500",
        className,
        { "bg-green-500 hover:bg-green-600": greenColor },
        { "bg-red-500 hover:bg-red-600": redColor },
      )}
      {...spread}
    >
      {label}
    </button>
  );
}
