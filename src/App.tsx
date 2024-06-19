import { Users } from "./components/Users";
import { usersData } from "./components/Users/usersData";

function App() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      <Users usersData={usersData} />
    </main>
  );
}

export default App;
