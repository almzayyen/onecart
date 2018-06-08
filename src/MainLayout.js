import React, {Component} from 'react';
import './MainLayout.css';

class MainLayout extends Component {
  render() {
    return (
      <div>
        <div id="menuBackground">
          <div id="menuContainer">
            <label for="show-menu" class="show-menu">OneCart ￬</label>
            <input type="checkbox" id="show-menu" role="button"/>
            <ul id="menu">
              <h1 id="logo">OneCart</h1>
              <li>
                <a href="#">Cart</a>
              </li>
              <li>
                <a href="#">Account ￬</a>
                <ul class="hidden">
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
