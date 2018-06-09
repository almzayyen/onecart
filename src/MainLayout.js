import React, {Component} from 'react';
import './layout-template.css';

class MainLayout extends Component {
  render() {
    return (
      <div>
        <div id="menuBackground">
          <div id="menuContainer">
            <label htmlFor="show-menu" className="show-menu">OneCart ￬</label>
            <input type="checkbox" id="show-menu" role="button"/>
            <ul id="menu">
              <h1 id="logo">OneCart</h1>
              <li>
                <a href="#">Cart</a>
              </li>
              <li>
                <a href="#">Account ￬</a>
                <ul className="hidden">
                  <li>
                    <a href="#">Login</a>
                  </li>
                  <li>
                    <a href="#">Register</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MainLayout;
