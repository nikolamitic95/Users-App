import React from "react";


import { InputEl } from "../Input/Input";
import { Container, Center, Text, Button } from '@chakra-ui/react';

const FormEl = ({ title, message, name, email, setValues, submit, buttonTitle }) => {
    return (
        <Container
            p="25px"
            borderColor="#00417A"
            borderWidth="2px"
            marginTop="50px"
            borderRadius="15px"
        >
            <Center>
                <Text fontSize="4xl" marginTop="10px" fontWeight="700">{title}</Text>
            </Center>
            <Center>
                <Text fontSize="1xl" marginTop="10px" color="red" fontWeight="600">{message}</Text>
            </Center>
            <InputEl
                type="text"
                name="name"
                placeholder="Enter name"
                value={name}
                onChange={setValues}
            />
            <InputEl
                type="email"
                name="email"
                placeholder="Enter email"
                value={email}
                onChange={setValues}
            />
            <Center>
                <Button
                    bg="#00417A"
                    color="white"
                    _hover={{ bg: "#00417A" }}
                    marginTop="15px"
                    onClick={() => submit()}
                >
                    {buttonTitle}
                </Button>
            </Center>
        </Container>
    )
}

export { FormEl }