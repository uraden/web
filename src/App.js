import style from "./App.module.css"

import AppComponent from './AppComponent'


import { HashRouter as Router, Switch, Route } from 'react-router-dom' ;

function App() {
  
  
  return (
    <div className="App">
   
   <Router basename='/'>
          <Switch>
            <Route path="/" exact  component ={AppComponent} />
           
        </Switch>
  </Router>
   
    </div>
  );
}

export default App;
