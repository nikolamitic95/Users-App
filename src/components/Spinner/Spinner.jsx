import React from 'react';

import { Spinner, Center } from "@chakra-ui/react"

const Loader = () => {
    return (
        <Center>
            <Spinner
                marginTop="60px"
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="#00417A"
                size="xl"
            />
        </Center>
    )
}

export { Loader }