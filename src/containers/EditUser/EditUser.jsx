import React, { useEffect, useState } from "react";

import { userService } from '../../services/userService';
import { InputEl } from "../../components/InputEl/InputEl";
import { Container, Center, Text, Button } from '@chakra-ui/react';
import { useHistory, useParams } from "react-router";

const EditUser = () => {



    return (
        <Container
            p="25px"
            borderColor="#00417A"
            borderWidth="2px"
            marginTop="50px"
            borderRadius="15px"
        >
            <Center>
                <Text fontSize="4xl" marginTop="10px">EDIT USER</Text>
            </Center>
            <InputEl />
            <InputEl />
            <Center>
                <Button
                    bg="#00417A"
                    color="white"
                    _hover={{ bg: "#00417A" }}
                    marginTop="15px">
                    Save
                        </Button>
            </Center>
        </Container>
    )
}

export { EditUser }