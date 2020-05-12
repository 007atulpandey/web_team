import React from 'react';
import './nav/Nav.css'
import './App.css';
import Combine from './Combinefirst'
import Explore from './explore/Explore'
import Loader from './body/Loader'
import {BrowserRouter as Router , Switch,Route} from'react-router-dom'
function App() {
  return (
    <Router>
      <Loader/>
    <div className="App">
      <Switch>
       
     <Route path="/" exact  component ={Combine}/>
     </Switch><Switch><Route path="/explore" exact component = {Explore}/></Switch>
    </div>
    </Router>
  );
}

export default App;
