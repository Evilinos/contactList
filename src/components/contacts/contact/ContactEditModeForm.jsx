import styles from "./Contact.module.css";
import React from "react";

const ContactEditModeForm = (props) => {
    return <form onSubmit={props.onSubmit} className={styles.contact}>
        <div className={styles.row}>
            <input onChange={props.onChangeInput} value={props.formData.firstName} name='firstName' type='text' placeholder='First Name'/>
            <input onChange={props.onChangeInput} value={props.formData.secondName} name='secondName' type='text' placeholder='Second Name'/>
        </div>
        <div className={styles.row}>
            <input onChange={props.onChangeInput} value={props.formData.number} name='number' type='text' placeholder='Number'/>
            <input onChange={props.onChangeInput} value={props.formData.address} name='address' type='text' placeholder='Address'/>
        </div>
        <input onChange={props.onChangeInput} value={props.formData.description} name='description' placeholder='Description'/>
        <div className={styles.buttons}>
            <button type='submit'>Save</button>
            <button onClick={() => props.delete(props.formData.id)}>Delete</button>
        </div>
    </form>
}

export default ContactEditModeForm
