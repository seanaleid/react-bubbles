// general imports
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./utils/PrivateRoute";

// styles
import "./styles.scss";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch> 
          <PrivateRoute exact path="/homepage" component={BubblePage} />
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
