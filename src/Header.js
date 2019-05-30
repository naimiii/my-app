import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './Header.css';
export default class Header extends Component {
  render() {
    return ( <div className="Header">
    <h1> {this.props.name}</h1>
      <div>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Kids</Link>    
                <Link to="/men">Mens</Link>   
                 <Link to="/women">Womens</Link>    
                 <Link to="/plussize">Plus Size</Link> 
              </li>
            </ul>
          </nav>
        </div>
      </div>
      </div>
      
      );
    }
  }