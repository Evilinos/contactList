import styles from "./Contact.module.css";
import {Field, reduxForm} from "redux-form";
import React from "react";
import {Input} from "../../../redux-forms/FormControls";
import {maxLength20, number, required} from "../../../redux-forms/validators";

const ContactEditForm = (props) => {
    return <form onSubmit={props.handleSubmit} className={styles.contact}>
        <div className={styles.row}>
            <Field name='firstName' component={Input} type='text' placeholder='First Name'/>
            <Field name='secondName' component='input' type='text' placeholder='Second Name'/>
        </div>
        <div className={styles.row}>
            <Field name='number' component={Input} validate={[required, number, maxLength20]} type='text' placeholder='Number'/>
            <Field name='address' component='input' type='text' placeholder='Address'/>
        </div>
        <Field name='description' component='textarea' placeholder='Description'/>
        <div className={styles.buttons}>
        <button>Save</button>
        <button onClick={() => props.delete(props.id)}>Delete</button>
        </div>
    </form>
}

export default reduxForm({form: 'contactEdit'})(ContactEditForm)

