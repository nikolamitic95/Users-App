import React from "react";

import { InputEl } from "../Input/Input";
import { Container, Center, Text, Button } from '@chakra-ui/react';

const FormEl = ({ title, message, name, email, city, street, companyName, phone, website, setValues,
    submit, buttonTitle }) => {
    return (
        <Container
            p="25px"
            borderColor="#00417A"
            borderWidth="2px"
            marginTop="50px"
            marginBootom="50px"
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
            <InputEl
                type="text"
                name="city"
                placeholder="Enter city"
                value={city}
                onChange={setValues}
            />
            <InputEl
                type="text"
                name="street"
                placeholder="Enter street"
                value={street}
                onChange={setValues}
            />
            <InputEl
                type="text"
                name="companyName"
                placeholder="Enter companyName"
                value={companyName}
                onChange={setValues}
            />
            <InputEl
                type="text"
                name="phone"
                placeholder="Enter phone"
                value={phone}
                onChange={setValues}
            />
            <InputEl
                type="text"
                name="website"
                placeholder="Enter website"
                value={website}
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