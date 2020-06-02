import styles from "./AddNewContactForm.module.css";
import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLength20, number, required} from "../../../redux-forms/validators";
import {Input} from "../../../redux-forms/FormControls";

const AddNewContactForm = (props) => {
    return <form onSubmit={props.handleSubmit} className={styles.addNewContactForm}>
        <div className={styles.contact}>
            {props.error && <div>ОШИБКА</div>}
            <button className={styles.addNewContactForm_buttonClose} onClick={() => {
                props.setAddNewContactForm(false)
            }}>X
            </button>
            <Field name='firstName' component={Input} validate={[required]} type='text' placeholder='First Name'/>
            <Field name='secondName' component='input' type='text' placeholder='Second Name'/>
            <Field name='number' component={Input} validate={[required, number, maxLength20]} type='text' placeholder='Number'/>
            <Field name='address' component='input' type='text' placeholder='Address'/>
            <Field name='description' component='textarea' placeholder='Description'/>
            <div></div>
            <button className={styles.addNewContactForm_buttonSave}>Save</button>
        </div>
    </form>
};

export default reduxForm({form: 'addNewContact'})(AddNewContactForm)