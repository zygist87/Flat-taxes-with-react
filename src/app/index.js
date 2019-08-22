import React from "react";
import "./index.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Declaration, History, EmptyPage } from "./pages";
//import { Layout } from "./components";
import { ROUTES } from "../constants";
import { Layout, DeclarationProvider } from "./components";

function App() {
  return (
    <DeclarationProvider>
      <Router>
        <Layout>
          <Switch>
            <Route path={ROUTES.declaration} exact component={Declaration} />
            <Route path={ROUTES.history} exact component={History} />
            <Route path={ROUTES.emptyPage} exact component={EmptyPage} />
            <Redirect from={ROUTES.home} to={ROUTES.defaultPage} exact />
          </Switch>
        </Layout>
      </Router>
    </DeclarationProvider>
  );
}

export default App;
// nuo 22 pozicijos
