import React from "react";
import styles from './FormControls.module.css'

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return <input className={(hasError ? styles.error : ' ')} {...input} {...props}/>
}