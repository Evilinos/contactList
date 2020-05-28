import React from "react";
import {Field, reduxForm} from "redux-form";
import styles from './Login.module.css'
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

let LoginForm = (props) => {
    return <form className={styles.loginForm} onSubmit={props.handleSubmit}>
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
}

LoginForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    if (props.isAuth) {
        return <Redirect to='/contacts'/>
    }
    const onSubmit = (formData) => {
        props.login()
    }
    return <div className={styles.loginPage}>
        <LoginForm onSubmit={onSubmit}/>
        <div className={styles.buttonsBlock}>
            <button>Create new account</button>
            <button>Forget password?</button>
        </div>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

const LoginContainer = connect(mapStateToProps, {login})(Login)

export default LoginContainer