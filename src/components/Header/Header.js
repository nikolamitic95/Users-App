import React from "react";

import { Button } from "@chakra-ui/button";
import { Center } from "@chakra-ui/layout";
import { Menu } from "@chakra-ui/menu";
import { useColorMode } from "@chakra-ui/color-mode";

const Header = () => {

  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Menu>
      <Center bg="#00417A" p="20px">
        <Button onClick={toggleColorMode} bg="white" color="black" _hover={{ bg: "white" }}>
          {colorMode === "light" ? "Dark" : "Light"} mode
        </Button>
      </Center>
    </Menu>
  )
};

export { Header };