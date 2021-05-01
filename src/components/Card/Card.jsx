import React from "react";

import { Text, Box, Center } from '@chakra-ui/react';

const Card = ({ title, body }) => {
    return (
        <Box bg="#00417A" color="white" marginBottom="10px">
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