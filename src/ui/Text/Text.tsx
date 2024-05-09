import { type ComponentProps } from "react";
import { cn } from "../../utils/cn";

type Props = {
  children: string | string[] | number;
} & ComponentProps<"p">;

export function Text({ children, className, ...spread }: Props) {
  return (
    <p className={cn("my-6 dark:text-white", className)} {...spread}>
      {children}
    </p>
  );
}
