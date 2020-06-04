import styles from "./Contact.module.css";
import avatar from "../../../assets/images/avatar.png";
import React, {useState} from "react";
import ContactEditModeForm from "./ContactEditModeForm";

const Contact = (props) => {

    let [formData, setFormData] = useState({
        id: props.id,
        firstName: props.firstName,
        secondName: props.secondName,
        number: props.number,
        address: props.address,
        description: props.description,
    });
    let [editMode, setEditMode] = useState(false);

    const onSubmit = () => {
        let newContactsArray = props.contacts.map(c => {
            if (c.id === formData.id)
                return formData;
            return c
        });
        props.editContact(newContactsArray);
        setEditMode(false);
        props.setSearch(false)
    };

    const onChangeInput = (e) => {
        setFormData({...formData, ...{[e.target.name]: e.target.value}})
    };


    return editMode ? <ContactEditModeForm deleteContactHandler={props.deleteContactHandler} onSubmit={onSubmit}
                                           onChangeInput={onChangeInput} formData={formData}/>
        : <div className={styles.contact}>
            <img src={avatar} alt="contact avatar"/>
            <span className={styles.contact_name}>{props.firstName + '  ' + props.secondName}</span>
            <div>{props.number}<span className={styles.contact_address}>{props.address}</span></div>
            <div>{props.description}</div>
            <div className={styles.contact_button}>
                <button onClick={() => {
                    setEditMode(true)
                }}>edit
                </button>
            </div>
        </div>
};

export default Contact