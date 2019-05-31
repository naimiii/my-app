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
              </li>
              <li>
                <Link to="/men">Mens</Link>
              </li>
              <li>
                <Link to="/women">Womens</Link>
              </li>
              <li>
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

