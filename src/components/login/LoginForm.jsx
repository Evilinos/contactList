import styles from "./Login.module.css";
import {Field, reduxForm} from "redux-form";
import React from "react";

const LoginForm = ({handleSubmit}) => {
    return <form className={styles.loginForm} onSubmit={handleSubmit}>
        <div>
            <Field component='input' placeholder='login' type='text' name='login'/>
        </div>
        <div>
            <Field component='input' type='password' name='pass'/>
        </div>
        <div>
            <Field component='input' type='checkbox' name='rememberMe' id='rememberMe'/>
            <label htmlFor='rememberMe'>Remember me</label>
        </div>
        <button>Login</button>
    </form>
};

export default reduxForm({form: 'login'})(LoginForm)