import { Center, Button, Flex, useToast } from "@chakra-ui/react";

export default function Home() {
  const toast = useToast();
  const show = () =>
    toast({
      title: "Hey!!",
      description: "I'm a fancy toast ",
      status: "success",
      position: "top",
      icon: "😎",
      duration: 5000,
    });

    const close = () => toast.closeAll();

  return (
    <Center h="100vh" bg="gray.900">
      <Flex gap={2}>
        <Button colorScheme="pink" size="lg" onClick={show}>
          show toast!
        </Button>
        <Button colorScheme="pink" size="lg" onClick={close}>
          close all!
        </Button>
      </Flex>
    </Center>
  );
}
