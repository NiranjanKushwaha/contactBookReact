import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { AddContact } from './Components/AddContact';
import pageNotFound from './Components/pageNotFound';
import Update from './Components/Update';
import ViewContacts from './Components/ViewContacts';

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row"><div className="col-12">
        <Switch>
          <Route path='/' exact component={AddContact} />
          <Route path='/view' exact component={ViewContacts} />
          <Route path='/update/:id' exact component={Update} />
          <Route component={pageNotFound} />
        </Switch>
      </div></div>
    </div>
  )
}

export default App
