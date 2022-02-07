import './App.css';
import React from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/general"><News key="general" country="in" pageS={5} category="general" /></Route>
          <Route exact path="/business"><News key="business" country="in" pageS={5} category="business" /></Route>
          <Route exact path="/entertainment"><News key="entertainment" country="in" pageS={5} category="entertainment" /></Route>
          <Route exact path="/health"><News key="health" country="in" pageS={5} category="health" /></Route>
          <Route exact path="/science"><News key="science" country="in" pageS={5} category="science" /></Route>
          <Route exact path="/sports"><News key="sports" country="in" pageS={5} category="sports" /></Route>
          <Route exact path="/technology"><News key="technology" country="in" pageS={5} category="technology" /></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
