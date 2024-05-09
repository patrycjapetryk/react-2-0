import { type ComponentProps } from "react";
import { cn } from "../../utils/cn";

type Props = {
  children: string | string[] | number;
} & ComponentProps<"h2">;

export function Header({ children, className, ...spread }: Props) {
  return (
    <h2 className={cn("text-xl uppercase", className)} {...spread}>
      {children}
    </h2>
  );
}
