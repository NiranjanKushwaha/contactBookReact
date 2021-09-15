import React from 'react'
import {Switch,Route} from 'react-router-dom';
import {AddContact} from './Components/AddContact';
import ViewContacts from './Components/ViewContacts';

const App = () => {
  return (
    <Switch>
      <Route path='/' exact component={ AddContact}/>
      <Route path='/view' exact component={ViewContacts}/>
    </Switch>
  )
}

export default App
