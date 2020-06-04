import React from "react";
import styles from "./Contacts.module.css"
import AddNewContactForm from "./addNewContactForm/AddNewContactForm";
import Contact from "./contact/Contact";
import Search from "./Search";

const Contacts = (props) => {

    const selectContacts = () => props.search ? props.matchesContacts : props.contacts;

    const contacts = selectContacts().map((c) => <Contact contacts={props.contacts}
                                                 editContact={props.editContact}
                                                 setSearch={props.setSearch}
                                                 deleteContactHandler={props.deleteContactHandler}
                                                 key={c.id} {...c}/>);

    const search = props.search ? <Search contacts={props.contacts}
                                          setMatchesContacs={props.setMatchesContacts}
                                          setSearch={props.setSearch}/>
        : <button onClick={() => props.setSearch(true)}>Search</button>;


    return <div className={styles.wrapper}>
        {props.addNewContactForm &&
        <AddNewContactForm onSubmit={props.submitNewContactFormHandler}
                           setAddNewContactForm={props.setAddNewContactForm}/>}
        <div className={styles.header}>
            <h2>Contacts</h2>
            <button onClick={() => props.setAddNewContactForm(true)}>Add new</button>
            {search}
        </div>
        <div className={styles.contacts}>
            {contacts}
        </div>
    </div>
};

export default Contacts




