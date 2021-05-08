import  React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Blog from './views/Blog';
import About from './views/About';
import Towerr from "./tower/Towerr.js";
import More_Sorting from "./sorting/More_Sorting.js";



function App() {
  return (
  	<Router >
       <React.Fragment>
            <Switch>
             <Route exact path="/about" component={About} />
             <Route exact path="/" component={Blog} />
             <Route path="/more_sorting" component={More_Sorting} />
            <Route path="/tower" component={Towerr} />
            </Switch>
          </React.Fragment>
        </Router>
  );
}

export default App;
