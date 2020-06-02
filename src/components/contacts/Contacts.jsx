import React from "react";
import styles from "./Contacts.module.css"
import AddNewContactForm from "./addNewContactForm/AddNewContactForm";
import Contact from "./contact/Contact";

const Contacts = (props) => {

    let contacts = props.contacts.map((c) => {
            return (
                <Contact contacts={props.contacts}
                         editContact={props.editContact}
                         delete={props.onClickDelete}
                         key={c.id} {...c}/>
            )
        }
    );

    return <div className={styles.wrapper}>
        {props.addNewContactForm &&
        <AddNewContactForm onSubmit={props.onSubmitNewContact} setAddNewContactForm={props.setAddNewContactForm}/>}
        <div className={styles.header}>
            <h2>Contacts</h2>
            <button>Search</button>
            <button onClick={() => props.setAddNewContactForm(true)}>Add new</button>
        </div>
        <div className={styles.contacts}>
            {contacts}
        </div>
    </div>
};

export default Contacts




