import { Center, Button, useToast } from "@chakra-ui/react";

export default function Home() {
  const toast = useToast();
  const onClick = () =>
    toast({
      title: "Hey!!",
      description: "I'm a fancy toast ",
      status: "success",
      position: "top",
      icon: "😎",
      colorScheme: "purple"
    });

  return (
    <Center h="100vh" bg="gray.900">
      <Button colorScheme="pink" size="lg" onClick={onClick}>
        show toast!
      </Button>
    </Center>
  );
}
