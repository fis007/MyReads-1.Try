import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Search from "./views/Search";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact to={"/"} component={Home} />
          <Route to={"/Search"} component={Search} />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
