import { Logo } from "./components/Logo/Logo";
import { ThemeContextProvider } from "./components/Theme/ThemeContext";
import { ThemeSwitcher } from "./components/Theme/ThemeSwitcher";
import { Users } from "./components/Users";
import { usersData } from "./components/Users/usersData";
import { Main } from "./ui";

function App() {
  return (
    <ThemeContextProvider>
      <Main>
        <Logo />
        <ThemeSwitcher />
        <Users usersData={usersData} />
      </Main>
    </ThemeContextProvider>
  );
}

export default App;
