import React, { useEffect, useState } from "react";

import { useHistory } from "react-router";
import { User } from "../../components/User/User";
import { Button } from "@chakra-ui/button";
import { Container, Center } from "@chakra-ui/layout";
import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/table";
import { userService } from "../../services/userService";
import { Loader } from "../../components/Spinner/Spinner";
import { authentication } from "../../hoc/authentication";

const UsersPage = () => {

    const [users, setUsers] = useState([]);
    const history = useHistory();
    const [loader, setLoader] = useState(true);

    const allUsers = async () => {
        const fetchUsers = await userService.getUsers();
        setUsers(fetchUsers);
        setLoader(false);
    };

    useEffect(() => {
        allUsers();
    }, []);

    return loader ? (
        <Loader />
    ) : (
        <Container maxW="container.lg">
            <Table
                variant="simple"
                marginTop="20px"
            >
                <Thead>
                    <Tr gridColumn="12">
                        <Th fontWeight="800">ID</Th>
                        <Th fontWeight="800">Name</Th>
                        <Th fontWeight="800">Email</Th>
                        <Th fontWeight="800">City</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {users.map((user) => (
                        <User user={user} key={user.id} onClick={() => history.push(`users/${user.id}`)} />
                    ))}
                </Tbody>
            </Table>
            <Center>
                <Button
                    bg="#00417A"
                    color="white"
                    _hover={{ bg: "#00417A" }}
                    marginTop="20px"
                    marginBottom="20px"
                    onClick={() => history.push('/createuser')}
                >Create new user
                </Button>
            </Center>
        </Container>
    )
}

export default authentication(UsersPage);