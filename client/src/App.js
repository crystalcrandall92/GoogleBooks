import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path={["/", "/books"]}>
              <Search />
            </Route>
            <Route exact path={"/saved"}>
              <Saved />
            </Route>
            <Route exact path={"/NoMatch"}>
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router >
    )
  }
}

export default App;
