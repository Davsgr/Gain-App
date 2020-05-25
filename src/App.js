import React, { useContext } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import Abdo from './components/Abdo'
import Footer from './components/Footer'
import Jambes from './components/Jambes'
import Pompes from './components/Pompes'
import Lateral from './components/Lateral'
import Ventral from './components/Ventral'
import Resume from './components/Resume'
import Training from './components/Training'
import NotFound from './components/NotFound'


import ResumeContextProvider from './components/contexts/ResumeContext'



const App = () => {


    return (
      <BrowserRouter>
      <div className="App">
          <Navbar />
          <ResumeContextProvider>
            <Switch>
              <Route exact path='/' component={Ventral}/>
              <Route exact path='/Training' component={Training}/>
              <Route exact path='/Ventral' component={Ventral}/>
              <Route exact path='/Lateral' component={Lateral} />
              <Route exact path='/Pompes' component={Pompes} />
              <Route exact path='/Jambes' component={Jambes} />
              <Route exact path='/Abdo' component={Abdo} />
              <Route component={NotFound} />
            </Switch>
              <Resume />
          </ResumeContextProvider>
          <Footer />
      </div>
      </BrowserRouter>
    );
  
}

export default App;
