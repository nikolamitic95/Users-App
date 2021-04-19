import React, { useState } from "react";

import { Button, Container, Text, Center } from "@chakra-ui/react";
import { InputEl } from "../../components/Input/Input";
import { useHistory } from "react-router-dom";
import { loginValidation } from '../../shared/utilities';

const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const history = useHistory();

    const emailSet = (value) => {
        setEmail(value);
        setMessage("");
    };

    const handleSubmit = () => {
        const login = loginValidation(email);
        setMessage(login)
        if (login === "Account created!" || login === "Welcome!") {
            history.push("/users")
        }
    }

    return (
        <Container
            p="25px"
            borderColor="#00417A"
            borderWidth="2px"
            marginTop="50px"
            borderRadius="15px"
        >
            <Center>
                <Text fontSize="4xl" marginTop="10px" fontWeight="700">LOGIN</Text>
            </Center>
            <Center>
                <Text fontSize="1xl" color="red" marginTop="10px">{message}</Text>
            </Center>
            <InputEl
                type="email"
                name="email"
                placeholder="Email"
                onChange={emailSet}
            />
            <Center>
                <Button
                    bg="#00417A"
                    color="white"
                    _hover={{ bg: "#00417A" }}
                    marginTop="15px"
                    onClick={handleSubmit}
                    disabled={!email}
                >
                    Login
                    </Button>
            </Center>
        </Container >
    );
};

export default LoginPage;