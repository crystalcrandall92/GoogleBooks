import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";


function App() {
  return (
    <Router>
      <div>
        <Switch>

          <Route exact path={["/", "/books"]} component={Search} />

          <Route exact path={"/saved"}>
            <Saved />
          </Route>

          <Route>
            <NoMatch />
          </Route>

        </Switch>
      </div>
    </Router >
  )
}


export default App;
