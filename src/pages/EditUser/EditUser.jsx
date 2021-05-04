import React, { useEffect, useState } from "react";

import { userService } from '../../services/userService';
import { useHistory, useParams } from "react-router";
import { validateEmail, formFields, validUrl, phoneValidaton } from "../../shared/utilities";
import { FormEl } from "../../components/Form/FormEl";
import { authentication } from "../../hoc/authentication";

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

        const validEmail = validateEmail(user.email)
        const allFields = formFields(user.name, user.email, user.city, user.street, user.companyName, user.phone,
            user.website)
        const url = validUrl(user.website)
        const validPhone = phoneValidaton(user.phone)

        if (!allFields) {
            setMessage("All fields are mandatory!")
            return;
        }
        if (!validEmail) {
            setMessage("Email is not valid!")
            return;
        }
        if (!url) {
            setMessage("Url is not valid")
            return;
        }
        if (!validPhone) {
            setMessage("Phone is not valid! example: 1-770-736-8031 x56442")
            return;
        }
        const status = await userService.editUser(user, id);
        if (status === 200) {
            alert("The user has been successfully updated!")
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
            id={user.id}
            name={user.name}
            email={user.email}
            city={user.city}
            street={user.street}
            companyName={user.companyName}
            phone={user.phone}
            website={user.website}
            setValues={setValues}
            submit={editUser}
            buttonTitle="Save"
        />
    )
}

export default authentication(EditUser);