import React, { useState } from 'react';
import auth from "./auth";
const Register = (props) => {
    const initialState = {
        username: '',
    }
    const [userInfo, setUserInfo] = useState(initialState)

    return (
        <button onClick={() => {
            auth.register(userInfo, () => {
                props.history.push("/");
            })
        }}>Login</button>
    );
}

export default Register;