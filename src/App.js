import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { AddSection } from './Components/AddSection';
import Nopage from './Components/Nopage';
import Update from './Components/Update';
import ShowSection from './Components/ShowSection';

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row"><div className="col-12 p-0 m-0">
        <Switch>
          <Route path='/' exact component={AddSection} />
          <Route path='/show' exact component={ShowSection} />
          <Route path='/update/:id' exact component={Update} />
          <Route component={Nopage} />
        </Switch>
      </div></div>
    </div>
  )
}

export default App
