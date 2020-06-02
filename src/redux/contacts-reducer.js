
// constants
const ADD_NEW_CONTACT = 'contacts/ADD_NEW_CONTACT';
const DELETE_CONTACT = 'contacts/DELETE_CONTACT';
const EDIT_CONTACT = 'contacts/EDIT_CONTACT';

// state
const initialState = {
    contacts: [
        {
            id: 1,
            firstName: 'firstName',
            secondName: 'secondName',
            number: '+12345678910',
            address: 'address',
            description: 'first',
        },
        {
            id: 2,
            firstName: 'firstName',
            secondName: 'secondName',
            number: '+12345678999',
            address: 'address',
            description: 'second',
        },
    ]
};

// reducer
const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_CONTACT:
            return {...state, contacts: [...state.contacts, action.contact]};
        case DELETE_CONTACT:
            return {...state, contacts: action.contacts};
        case EDIT_CONTACT:
            return {...state, contacts: action.contacts};
        default:
            return {...state}
    }
};

// action creators
export const addNewContact = (contact) => ({type: ADD_NEW_CONTACT, contact,});
export const deleteContact = (contacts) => ({type: DELETE_CONTACT, contacts});
export const editContact = (contacts) => ({type: EDIT_CONTACT, contacts});

export default contactsReducer