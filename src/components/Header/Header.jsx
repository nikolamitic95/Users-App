import React from "react";

import { Text, Box } from "@chakra-ui/layout";
import { Menu } from "@chakra-ui/menu";
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Header = () => {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Menu>
      <Box
        bg="#00417A"
        p="20px"
        d="flex"
        justifyContent="space-around"
      >
        <Text color="white" fontSize="3xl" fontWeight="700"> USERS APP </Text>
        {colorMode === "light" &&
          <MoonIcon
            boxSize={8}
            color="white"
            onClick={toggleColorMode}
            cursor="pointer"
            marginTop="6px"
          />
        }
        {colorMode === "dark" &&
          <SunIcon
            boxSize={8}
            color="white"
            onClick={toggleColorMode}
            cursor="pointer"
            marginTop="6px"
          />
        }
      </Box>
    </Menu>
  )
};

export { Header };