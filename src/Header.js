import React, {Component} from 'react';
import { 
     Link,  BrowserRouter as Router } 
    from "react-router-dom";
 export default class header extends  Component{
     render(){
         return(
             <div>
                  <div>
                     <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">kids</Link>
            </li>
            <li>
              <Link to="/Men/">Men</Link>
            </li>
            <li>
              <Link to="/Women/">Women</Link>
            </li>

            <li>
              <Link to="/plussize/">plussize</Link>
            </li>
          </ul>
        </nav>

        </Router>
      </div>
  
             </div>
         )
     }

     
 }