import React, { useState } from "react";

import { userService } from '../../services/userService';
import { useHistory } from "react-router";
import { validateEmail } from '../../shared/utilities';
import { FormEl } from "../../components/Form/FormEl";
import { authentication } from "../../hoc/authentication";

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
            setMessage("Please enter a valid name and email!")
        } else if (status === 201) {
            alert("The user has been successfully created!")
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

export default authentication(CreateNewUser)