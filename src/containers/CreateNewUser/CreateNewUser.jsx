import React, { useState } from "react";

import { userService } from '../../services/userService';
import { InputEl } from "../../components/InputEl/InputEl";
import { Container, Center, Text, Button } from '@chakra-ui/react';
import { useHistory } from "react-router";
import { validateEmail } from '../../shared/utilities'

const CreateNewUser = () => {
    const [user, setUser] = useState({});
    const history = useHistory();
    const [message, setMessage] = useState("");


    const setValues = (data, name) => {
        setUser({ ...user, [name]: data });
        setMessage("");
    };

    const sendUser = () => {
        const validEmail = validateEmail(user.email)
        if (validEmail && !user.name) {
            userService.postUser(user)
            history.push('/users')
        } else {
            setMessage("Enter a valid name and email")
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
                <Text fontSize="4xl" marginTop="10px">CREATE USER</Text>
            </Center>
            <Center>
                <Text fontSize="1xl" marginTop="10px" color="red">{message}</Text>
            </Center>
            <InputEl
                type="text"
                name="name"
                placeholder="Enter name"
                onChange={setValues}
            />
            <InputEl
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={setValues}
            />
            <Center>
                <Button
                    bg="#00417A"
                    color="white"
                    _hover={{ bg: "#00417A" }}
                    marginTop="15px"
                    onClick={() => sendUser()}
                >
                    Create
                        </Button>
            </Center>
        </Container>
    )
}

export { CreateNewUser }