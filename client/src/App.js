import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Footer />
        </Router>
      </div>
    );
  }
}
