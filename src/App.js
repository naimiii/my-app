import React, {Component} from 'react';
import Kids from './Kids';
import Men from './Men';
import Women from './Women';
import PlusSize from './PlusSize';
import Header from './Header';
import { Route, Switch } from "react-router-dom";

export default class App extends Component{
   
  render(){
    return(
      <div>
        <Header/>
        <Switch>
         <Route exact path="/" component={Kids} />
         <Route path="/men" component={Men} />
         <Route path="/women" component={Women} />
         <Route path="/plussize" component={PlusSize} />
        </Switch>
      </div>
    )
  }
}