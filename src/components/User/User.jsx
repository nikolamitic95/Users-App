import React from "react";

import { Td, Tr } from "@chakra-ui/table";

const User = ({ user, onClick, details }) => {
    return (
        <Tr
            cursor="pointer"
            onClick={onClick}
            _hover={{ bg: "#00417A", color: "white" }}
        >
            <Td fontWeight="600">{user.id}</Td>
            <Td fontWeight="600">{user.name}</Td>
            <Td fontWeight="600">{user.email}</Td>
            <Td fontWeight="600">{user.city}</Td>
            {details && <Td fontWeight="600">{user.street}</Td>}
            {details && <Td fontWeight="600">{user.companyName}</Td>}
            {details && <Td fontWeight="600">{user.phone}</Td>}
            {details && <Td fontWeight="600">{user.website}</Td>}
        </Tr>
    );
};

export { User }