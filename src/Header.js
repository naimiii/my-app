import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class header extends Component {
  render() {
    return (
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
    );
  }
}
