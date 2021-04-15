import { Button } from "@chakra-ui/button";
import { Container } from "@chakra-ui/layout";
import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/table";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { User } from "../../components/User/User";
import { userService } from "../../services/userService";

const SingleUserPage = () => {

    const [user, setUser] = useState();
    const history = useHistory();
    let { id } = useParams();

    const getUser = async (id) => {
        const fetchSingleUser = await userService.getSingleUser(id);
        setUser(fetchSingleUser);
    };

    useEffect(() => {
        getUser(id);
    }, [id]);

    return (
        <Container maxW="container.xl">
        <Table variant="simple" marginTop="15px">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>City</Th>
              <Th>Street</Th>
              <Th>Company Name</Th>
              <Th>Phone</Th>
              <Th>Website</Th>
            </Tr>
          </Thead>
          <Tbody>
            <User user={user} detailed />
          </Tbody>
        </Table>
        <Button margin="15px">
          Edit
        </Button>
        <Button margin="15px">
          Delete
        </Button>
      </Container>
    )
}

export { SingleUserPage }