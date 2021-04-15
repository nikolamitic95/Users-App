import React from "react";

import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";

const InputEl = ({ type, name, value, onChange, placeholder }) => {
    return (
        <FormControl id={name} marginTop="17px">
            <Input
                type={type}
                name={name}
                value={value}
                onChange={(e) => onChange(e.target.value, name)}
                placeholder={placeholder}
                required
            />
        </FormControl>
    );
};

export { InputEl };