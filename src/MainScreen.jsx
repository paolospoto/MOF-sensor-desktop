import { Button, Flex } from "@mantine/core";
import React from "react";

const MainScreen = () => {
  return (
    <Flex gap={"xl"} p={"xl"} w={"100%"} justify={"center"}>
      <Button>Blank</Button>
      <Button>Reference</Button>
      <Button>Sample</Button>
    </Flex>
  );
};

export default MainScreen;
