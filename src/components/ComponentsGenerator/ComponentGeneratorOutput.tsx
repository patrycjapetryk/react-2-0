import { Button, Header, Text } from "../../ui";

type Props = {
  componentName: string;
};

export function ComponentGeneratorOutput({ componentName }: Props) {
  if (componentName === "button") {
    return (
      <div>
        <Button label="Click me!" />
      </div>
    );
  } else if (componentName === "text") {
    return (
      <div>
        <Text>Hello world!</Text>
      </div>
    );
  } else if (componentName === "header") {
    return (
      <div>
        <Header>Your title goes here</Header>
      </div>
    );
  } else {
    return "";
  }
}
