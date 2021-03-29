 import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddItem from "./components/add-item.component";
import ItemsList from "./components/items-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/items"} className="nav-link">
                  Items
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <h2>React with firebase</h2>
          <Switch>
            <Route exact path={["/", "/items"]} component={ItemsList} />
            <Route exact path="/add" component={AddItem} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
