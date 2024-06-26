const Greeting = (name: string): string => {
  const greetinMsg = `Hi ${name}, how are you doing today?`;
  return greetinMsg;
};

const GreetingResponse = (name: string): any => {
  const GreetingResponse = `Hi ${name}, i'm doing well!`;

  if (name) {
    return GreetingResponse;
  }

  return true;
};
