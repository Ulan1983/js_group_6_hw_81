import React, {Fragment} from 'react';
import Link from "./containers/Link";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path='/' exact component={Link} />
      </Switch>
    </Fragment>
  );
}

export default App;
