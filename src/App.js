import React, {Component} from 'react';
import kids from './kids';
import Men from './Men';
import women from './women';
import plussize from './plussize';
import Header from './Header';
import { 
  BrowserRouter as Router, 
  Route, 
  Link } 
  from "react-router-dom";
   export default class App extends Component{
  render(){
    return(
      <Router>
        <div>
          <Header/>
          <Route path="/" exact component={kids} />
        <Route path="/Men/"  exact component={Men} />
        <Route path="/Women/"  exact component={women} />
        <Route path="/plussize/" exact component={plussize} />
        
          </div>
        </Router>
    )
  }
}