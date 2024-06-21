import { type ChangeEventHandler } from "react";
import { useThemeContext, Theme } from "./ThemeContext";

export function ThemeSwitcher() {
  const context = useThemeContext();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = event.target.value;
    context.changeTheme(value as Theme);
  };

  return (
    <select
      className="fixed right-10 top-8 rounded-md border-r-8 border-white py-2 pl-3 pr-2"
      onChange={handleChange}
    >
      <option value="">Select theme</option>
      <option value={Theme.ROSE}>Rose</option>
      <option value={Theme.BLUE}>Blue</option>
      <option value={Theme.ORANGE}>Orange</option>
    </select>
  );
}
