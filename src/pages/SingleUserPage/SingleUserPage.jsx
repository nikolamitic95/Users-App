import React, { useEffect, useState } from "react";

import { Button } from "@chakra-ui/button";
import { Container, Center } from "@chakra-ui/layout";
import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/table";
import { useHistory, useParams } from "react-router";
import { User } from "../../components/User/User";
import { userService } from "../../services/userService";
import { Loader } from "../../components/Spinner/Spinner";
import { authentication } from "../../hoc/authentication";

const SingleUserPage = () => {

  const [user, setUser] = useState();
  const history = useHistory();
  let { id } = useParams();
  const [loader, setLoader] = useState(true);

  const getUser = async (id) => {
    const fetchSingleUser = await userService.getSingleUser(id);
    setUser(fetchSingleUser);
    setLoader(false);
  };

  const deleteUser = async () => {
    const status = await userService.deleteUser(id, user);
    if (status === 200) {
      alert("The user has been deleted!")
      history.push('/users')
    } else {
      alert("Currently unable to delete user")
    }
  }

  useEffect(() => {
    getUser(id);
  }, [id]);

  return loader ? (
    <Loader />
  ) : (
    <Container maxW="container.xl">
      <Table
        variant="simple"
        marginTop="20px">
        <Thead>
          <Tr>
            <Th fontWeight="800">ID</Th>
            <Th fontWeight="800">Name</Th>
            <Th fontWeight="800">Email</Th>
            <Th fontWeight="800">City</Th>
            <Th fontWeight="800">Street</Th>
            <Th fontWeight="800">Company Name</Th>
            <Th fontWeight="800">Phone</Th>
            <Th fontWeight="800">Website</Th>
          </Tr>
        </Thead>
        <Tbody>
          <User user={user} details />
        </Tbody>
      </Table>
      <Center>
        <Button
          bg="#00417A"
          color="white"
          _hover={{ bg: "#00417A" }}
          marginTop="20px"
          marginRight="10px"
          marginBottom="20px"
          onClick={() => history.push(`/users/${id}/edit`)}
        >
          Edit User
        </Button>
        <Button
          bg="#00417A"
          color="white"
          _hover={{ bg: "#00417A" }}
          marginTop="20px"
          marginBottom="20px"
          onClick={() => deleteUser(id)}
        >
          Delete User
        </Button>
      </Center>
    </Container>
  )
}

export default authentication(SingleUserPage);