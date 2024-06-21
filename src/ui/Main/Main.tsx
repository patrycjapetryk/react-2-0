import { useThemeContext } from "../../components/Theme/ThemeContext";
import { cn } from "../../utils/cn";

export function Main({ children }: { children: React.ReactNode }) {
  const context = useThemeContext();

  return (
    <main
      className={cn("flex min-h-screen w-full items-center justify-center", {
        "bg-neutral-200": context.theme === "gray",
        "bg-blue-100": context.theme === "blue",
        "bg-orange-100": context.theme === "orange",
        "bg-rose-100": context.theme === "rose",
      })}
    >
      {children}
    </main>
  );
}
