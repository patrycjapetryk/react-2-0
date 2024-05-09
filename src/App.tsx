import { Button, Text } from "./ui";

function App() {
  const handleClick = () => {
    alert("Clicked!!!");
  };

  return (
    <>
      <main className="flex min-h-screen w-full flex-col items-center justify-center gap-6">
        <Text className="underline">Hey!!!</Text>

        <Button label="Click me" onClick={handleClick} />
        <Button label="Click me" greenColor onClick={handleClick} />
        <Button label="Click me" redColor onClick={handleClick} />
      </main>
    </>
  );
}

export default App;
