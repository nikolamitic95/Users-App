import React from "react";

import { Text, Box, Center } from '@chakra-ui/react';

const Card = ({ title, body }) => {
    return (
        <Box
            borderBottom="1px"
            borderTop="1px"
            borderColor="#EDF2F7"
            marginBottom="20px"
            _hover={{ bg: "#00417A", color: "white" }}>
            <Center>
                <Text fontSize="2xl">
                    {title}
                </Text>
            </Center>
            <Text>
                {body}
            </Text>
        </Box>
    )
}

export { Card }