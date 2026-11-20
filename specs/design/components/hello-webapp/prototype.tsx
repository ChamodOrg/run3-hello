import { Heading, Screen, defineApp } from "@wso2/prototype-kit";

function Greeting() {
  return (
    <Screen>
      <Heading id="heading.greeting" text="Hello, World!" />
    </Screen>
  );
}

export default defineApp({
  screens: {
    "screen.greeting": Greeting,
  },
  data: {},
});
