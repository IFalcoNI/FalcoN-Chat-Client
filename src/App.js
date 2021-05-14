import React, { Component } from "react";
import "../src/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";
import Home from "./components/Home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Buy from "./components/Buy/Buy";
import Page404 from "./components/Page404/Page404";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          {/* <Header /> */}
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/join" component={Join}></Route>
            <Route path="/chat" component={Chat}></Route>
            <Route path="/buy" component={Buy}></Route>
            <Route path="*" exact={true} component={Page404} />
          </Switch>
          {/* <Footer /> */}
        </Router>
      </div>
    );
  }
}

export default App;
