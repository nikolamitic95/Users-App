import React from "react";

import { Td, Tr } from "@chakra-ui/table";

const User = ({ user, onClick, detailed }) => {
    return (
        <Tr
            onClick={onClick}
        >
            <Td>{user.id}</Td>
            <Td>{user.name}</Td>
            <Td>{user.email}</Td>
            <Td>{user.city}</Td>
            {detailed && <Td>{user.street}</Td>}
            {detailed && <Td>{user.companyName}</Td>}
            {detailed && <Td>{user.phone}</Td>}
            {detailed && <Td>{user.website}</Td>}
        </Tr>
    );
};

export { User }