import React, {Suspense} from 'react';
import './App.css';
import Login from "./components/login/LoginContainer";
import {Redirect, Route, Switch} from 'react-router-dom';
import ContactsContainer from "./components/contacts/ContactsContainer";

const App = (props) => {
  return (
      <Suspense fallback={<div>Загрузка</div>}>
        <Switch>
            <Route exact path='/login'
            render={() =>  <Login/>}/>
            <Route exact path='/contacts'
                   render={() =>  <ContactsContainer/>}/>
            <Redirect exact from="/" to="/login" />
            <Route render={() => <div>404 NOT FOUND</div>}/>
        </Switch>
      </Suspense>
  );
}

export default App;
