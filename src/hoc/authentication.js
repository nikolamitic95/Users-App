import React, { useEffect, useState } from "react";

import { useHistory } from "react-router";
import { Loader } from "../components/Spinner/Spinner";

const authentication = (Component) => {
    return (props) => {
        const [auth, setAuth] = useState(false);
        const history = useHistory();

        useEffect(() => {
            const email = localStorage.getItem("email");
            if (email) {
                setAuth(true);
            } else {
                history.push("/login");
            }
        }, [history]);

        return <>{auth ? <Component {...props} /> : <Loader />}</>;
    };
};

export { authentication }