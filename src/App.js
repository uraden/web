import style from "./App.module.css"
import Quiz from "./projects/Quiz"
import AppComponent from './AppComponent'

import Giphy from './projects/giphy/Giphy'



import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' ;

function App() {
  
  
  return (
    <div className="App">
   
     <Router>
      <Switch>

    <Route path="/" exact  component ={AppComponent} />
    <Route path="/quiz" component={Quiz} /> 
    <Route path="/giphy" component={Giphy} />
  
   

    </Switch>

    </Router>
   
    </div>
  );
}

export default App;
