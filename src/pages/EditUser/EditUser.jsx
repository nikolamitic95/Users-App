import React, { useEffect, useState } from "react";

import { userService } from '../../services/userService';
import { useHistory, useParams } from "react-router";
import { validateEmail } from "../../shared/utilities";
import { FormEl } from "../../components/Form/FormEl";

const EditUser = () => {

    const [user, setUser] = useState({});
    const { id } = useParams();
    const history = useHistory();
    const [message, setMessage] = useState("")

    const getUser = async () => {
        const fetchSingleUser = await userService.getSingleUser(id);
        setUser(fetchSingleUser);
    };

    const setValues = (data, name) => {
        setUser({ ...user, [name]: data });
        setMessage("");
    };

    const editUser = async () => {
        const status = await userService.editUser(user, id);
        const validEmail = validateEmail(user.email)
        if (!validEmail || !user.name) {
            setMessage("Enter a valid name and email")
        } else if (status === 200) {
            alert("User edited")
            history.push('/users')
        }
    }

    useEffect(() => {
        if (!id) return;
        getUser();
    }, [id]);

    return (
        <FormEl
            title="EDIT USER"
            message={message}
            name={user.name}
            email={user.email}
            setValues={setValues}
            submit={editUser}
            buttonTitle="Save"
        />
    )
}

export { EditUser }