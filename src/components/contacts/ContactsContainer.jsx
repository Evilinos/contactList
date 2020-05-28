import {connect} from "react-redux";
import {addNewContact, deleteContact, editContact} from "../../redux/contacts-reducer";
import Contacts from "./Contacts";
import React, {useState} from "react";

const ContactsContainer = (props) => {

    const [addNewContactForm, setAddNewContactForm] = useState(false)



    return <Contacts {...props}
                     addNewContactForm={addNewContactForm}
                     setAddNewContactForm={setAddNewContactForm}/>
}

const mapStateToProps = (state) => ({
    contacts: state.contacts.contacts,
})


export default connect(mapStateToProps, {addNewContact, deleteContact, editContact})(ContactsContainer)
