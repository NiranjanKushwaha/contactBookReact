import React from 'react'
import {Switch,Route} from 'react-router-dom';
import {AddContact} from './Components/AddContact';
import Update from './Components/Update';
import ViewContacts from './Components/ViewContacts';

const App = () => {
  return (
    <Switch>
      <Route path='/' exact component={ AddContact}/>
      <Route path='/view' exact component={ViewContacts}/>
      <Route path='/update/:id' exact component={Update}/>
    </Switch>
  )
}

export default App
