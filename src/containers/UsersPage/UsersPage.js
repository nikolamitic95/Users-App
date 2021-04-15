import React, { useEffect, useState } from "react";

import { useHistory } from "react-router";
import { User } from "../../components/User/User";
import { Button } from "@chakra-ui/button";
import { Container } from "@chakra-ui/layout";
import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/table";
import { userService } from "../../services/userService";

const UsersPage = () => {

    const [users, setUsers] = useState([]);
    const history = useHistory();

    const allUsers = async () => {
        const fetchUsers = await userService.getUsers();
        setUsers(fetchUsers)
    };

    useEffect(() => {
        allUsers();
    }, []);

    return (
        <Container maxW="container.lg">
            <Table variant="simple" marginTop="15px">
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Name</Th>
                        <Th>Email</Th>
                        <Th>City</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {users.map((user) => (
                        <User user={user} key={user.id} onClick={() => history.push(`users/${user.id}`)} />
                    ))}
                </Tbody>
            </Table>
            <Button marginTop="15px" >Create new user</Button>
        </Container>
    )
}

export { UsersPage }