import React from "react";
import styles from './Login.module.css'
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import LoginForm from "./LoginForm";

const Login = () => {

    const isAuth = useSelector(state => state.auth.isAuth);
    const dispatch = useDispatch();

    if (isAuth) return <Redirect to='/contacts'/>;

    const onSubmit = (formData) => {
        dispatch(login(formData))
    };

    return <div className={styles.loginPage}>
        <LoginForm onSubmit={onSubmit}/>
        <div className={styles.buttonsBlock}>
            <button>Create new account</button>
            <button>Forget password?</button>
        </div>
    </div>
};

export default Login