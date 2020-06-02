import styles from "./Contact.module.css";
import React from "react";

const ContactEditModeForm = ({onSubmit, onChangeInput, deleteContactHandler, formData}) => {

    return <form onChange={onChangeInput} onSubmit={onSubmit} className={styles.contact}>
        <div className={styles.row}>
            <input value={formData.firstName} name='firstName' type='text' placeholder='First Name'/>
            <input value={formData.secondName} name='secondName' type='text' placeholder='Second Name'/>
        </div>
        <div className={styles.row}>
            <input value={formData.number} name='number' type='text' placeholder='Number'/>
            <input value={formData.address} name='address' type='text' placeholder='Address'/>
        </div>
        <input value={formData.description} name='description' placeholder='Description'/>
        <div className={styles.buttons}>
            <button type='submit'>Save</button>
            <button onClick={() => deleteContactHandler(formData.id)}>Delete</button>
        </div>
    </form>
};

export default ContactEditModeForm
