import React, { Component } from 'react';
import SignUp from "./screens/signup";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={SignUp} />
          <Route path="/wel" component={() => {
            return <h1>welcome to the site</h1>
          }} />
        </Switch>
      </Router>



    )
  }
}

export default App;
