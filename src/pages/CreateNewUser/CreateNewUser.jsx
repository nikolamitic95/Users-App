import React, { useState } from "react";

import { userService } from '../../services/userService';
import { useHistory } from "react-router";
import { validateEmail } from '../../shared/utilities';
import { FormEl } from "../../components/Form/FormEl";

const CreateNewUser = () => {
    const [user, setUser] = useState({});
    const history = useHistory();
    const [message, setMessage] = useState("");


    const setValues = (data, name) => {
        setUser({ ...user, [name]: data });
        setMessage("");
    };

    const createUser = async () => {

        const status = await userService.postUser(user);
        const validEmail = validateEmail(user.email)
        if (!validEmail || !user.name) {
            setMessage("Enter a valid name and email")
        } else if (status === 201) {
            alert("User created")
            history.push('/users')
        }
    }

    return (
        <FormEl
            title="CREATE USER"
            message={message}
            setValues={setValues}
            submit={createUser}
            buttonTitle="Create"
        />
    )
}

export { CreateNewUser }