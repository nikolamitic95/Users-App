import React, { useState } from "react";

import { userService } from '../../services/userService';
import { useHistory } from "react-router";
import { validateEmail, formFields, validUrl, phoneValidaton, } from "../../shared/utilities";
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
        const validEmail = validateEmail(user.email)
        const allFields = formFields(user.name, user.email, user.city, user.street, user.companyName, user.phone,
            user.website)
        const url = validUrl(user.website)
        // const formatFields = format(user.name, user.city, user.street, user.companyName)
        const validPhone = phoneValidaton(user.phone)

        if (!allFields) {
            setMessage("All fields are mandatory!")
            return;
        }
        // if (!formatFields) {
        //     setMessage("Invalid field name, city, street or company!")
        //     return;
        // }
        if (!validEmail) {
            setMessage("Email is not valid!")
            return;
        }
        if (!url) {
            setMessage("Url is not valid")
            return;
        }
        if (!validPhone) {
            setMessage("Invalid phone format! example: 1-770-736-8031 x56442")
            return;
        }

        const status = await userService.postUser(user);

        if (status === 201) {
            alert("The user has been successfully updated!")
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