import { useThemeContext } from "../Theme/ThemeContext";
import logo1 from "../../../public/logo-1.svg";
import logo2 from "../../../public/logo-2.svg";
import logo3 from "../../../public/logo-3.svg";

export function Logo() {
  const context = useThemeContext();

  if (context.theme === "rose") {
    return (
      <img
        className="fixed left-10 top-8"
        src={logo1}
        width="92"
        height="92"
        alt="logo"
      />
    );
  } else if (context.theme === "blue") {
    return (
      <img
        className="fixed left-10 top-8"
        src={logo2}
        width="92"
        height="92"
        alt="logo"
      />
    );
  } else if (context.theme === "orange") {
    return (
      <img
        className="fixed left-10 top-8"
        src={logo3}
        width="92"
        height="92"
        alt="logo"
      />
    );
  }
}
