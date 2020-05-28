import styles from "./Contact.module.css";
import avatar from "../../../assets/images/avatar.png";
import React, {useState} from "react";
import ContactEditForm from "./ContactEditModeForm";

const Contact = (props) => {

    let [editMode, setEditMode] = useState(false);

    const onSubmit = (contact) => {
        let newContactsArray =  props.contacts.map(c => {
            if (c.id === contact.id)
                return contact;
            return c
        });
        props.editContact(newContactsArray);
        setEditMode(false)
    };

    return editMode ? <ContactEditForm id={props.id} delete={props.delete} onSubmit={onSubmit} initialValues={props} setEditMode={setEditMode}/> :
        <div className={styles.contact}>
            <img src={avatar} alt="contact avatar"/>
            <span className={styles.contact_name}>{props.firstName + '  ' + props.secondName}</span>
            <div>{props.number}<span className={styles.contact_address}>{props.address}</span></div>
            <div>{props.description}</div>
            <div className={styles.contact_button}>
                <button onClick={() => {setEditMode(true)}}>edit</button>
            </div>
        </div>
};

export default Contact