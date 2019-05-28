import React, {Component} from 'react';
import Kids from './kids';
import Men from './Men';
import Women from './women';
import PlusSize from './plussize';
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
