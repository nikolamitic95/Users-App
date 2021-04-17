import React from "react";

import { Td, Tr } from "@chakra-ui/table";

const User = ({ user, onClick, details }) => {
    return (
        <Tr
            cursor="pointer"
            onClick={onClick}
        >
            <Td>{user.id}</Td>
            <Td>{user.name}</Td>
            <Td>{user.email}</Td>
            <Td>{user.city}</Td>
            {details && <Td>{user.street}</Td>}
            {details && <Td>{user.companyName}</Td>}
            {details && <Td>{user.phone}</Td>}
            {details && <Td>{user.website}</Td>}
        </Tr>
    );
};

export { User }