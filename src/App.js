import React from 'react';
import './App.css';
import Login from "./components/login/Login";
import {Redirect, Route, Switch} from 'react-router-dom';
import ContactsContainer from "./components/contacts/ContactsContainer";

const App = () => {
  return (
        <Switch>
            <Route exact path='/login'
            render={() =>  <Login />}/>
            <Route exact path='/contacts'
                   render={() =>  <ContactsContainer/>}/>
            <Redirect exact from="/" to="/login" />
            <Redirect exact from="/contactList/" to="/login" />
            <Route render={() => <div>404 NOT FOUND</div>}/>
        </Switch>
  );
};

export default App;
