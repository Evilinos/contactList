import React from "react";
import styles from "./Contacts.module.css"
import Contact from "./contact/Contact";
import AddNewContactForm from "./addNewContactForm/AddNewContactForm";

const Contacts = (props) => {

    const onClickDelete = (id) => {
        const newContactsArray = props.contacts.filter((c) => c.id !== id)
        props.deleteContact(newContactsArray)
    }

    const onSubmit = (formData) => {
        props.addNewContact(formData)
        props.setAddNewContactForm(false)
    }


    let contacts = props.contacts.map((c) => {
            return <Contact contacts={props.contacts}
                            editContact={props.editContact}
                            delete={onClickDelete}
                            key={c.id} {...c}/>
        }
    )
    return <div className={styles.wrapper}>
        {props.addNewContactForm &&
        <AddNewContactForm onSubmit={onSubmit} setAddNewContactForm={props.setAddNewContactForm}/>}
        <div className={styles.header}>
            <h2>Contacts</h2>
            <button>Search</button>
            <button onClick={() => props.setAddNewContactForm(true)}>Add new</button>
        </div>
        <div className={styles.contacts}>
            {contacts}
        </div>
    </div>
}

export default Contacts




