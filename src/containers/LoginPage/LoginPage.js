import React, { useState } from "react";

import { Button, Container, Text, Center } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/toast";
import { InputEl } from "../../components/InputEl/InputEl";
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
        const a = loginValidation(email);
        setMessage(a)
        if (a === "Account created!" || a === "Welcome!") {
            history.push("/users")
        }
    }

    return (
        <Container
            p="25px"
            borderColor="#00417A"
            borderWidth="5px"
            marginTop="50px"
            borderRadius="15px"
        >
            <Center>
                <Text fontSize="4xl" marginTop="10px">LOGIN</Text>
            </Center>
            <Center>
                <Text fontSize="2xl" marginTop="10px">{message}</Text>
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
        </Container>
    );
};

export { LoginPage };