import {combineReducers, createStore} from "redux";
import {reducer as formReducer} from "redux-form";
import authReducer from "./auth-reducer";
import contactsReducer from "./contacts-reducer";

const reducers = combineReducers({
    form: formReducer,
    auth: authReducer,
    contacts: contactsReducer,
})

const store = createStore(reducers)

export default store