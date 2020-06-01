import {connect} from "react-redux";
import {addNewContact, deleteContact, editContact} from "../../redux/contacts-reducer";
import Contacts from "./Contacts";
import React, {useState} from "react";
import Contact from "./contact/Contact";
import {Redirect} from "react-router-dom";

const ContactsContainer = (props) => {

    const [addNewContactForm, setAddNewContactForm] = useState(false);

    const onClickDelete = (id) => {
        const newContactsArray = props.contacts.filter((c) => c.id !== id);
        props.deleteContact(newContactsArray)
    };

    const onSubmitNewContact = (formData) => {
        formData.id = Date.now().toString()
        props.addNewContact(formData);
        setAddNewContactForm(false)
    };

    let contacts = props.contacts.map((c) => {
    if (!props.isAuth) return <Redirect to={'/login'}/>;
        return (
                <Contact contacts={props.contacts}
                         editContact={props.editContact}
                         delete={onClickDelete}
                         key={c.id} {...c}/>
            )
        }
    );

    return <Contacts onSubmitNewContact={onSubmitNewContact}
                     contacts={contacts}
                     addNewContactForm={addNewContactForm}
                     setAddNewContactForm={setAddNewContactForm}/>
};

const mapStateToProps = (state) => ({
    contacts: state.contacts.contacts,
    isAuth: state.auth.isAuth,
});


export default connect(mapStateToProps, {addNewContact, deleteContact, editContact})(ContactsContainer)
