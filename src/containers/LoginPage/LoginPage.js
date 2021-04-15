import React, { useState } from "react";
import { Button, Container, Text, Center } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/toast";
import { InputEl } from "../../components/InputEl/InputEl";
import { useHistory } from "react-router-dom";
import { validateEmail } from '../../shared/utilities';

const LoginPage = () => {

    const [email, setEmail] = useState("");
    const history = useHistory();

    const emailSet = (value) => {
        setEmail(value);
    };



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
                    // onClick={ }
                >
                    Login
                    </Button>
            </Center>
        </Container>
    );
};

export { LoginPage };