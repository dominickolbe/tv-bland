import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { PageHeader } from "./components/PageHeader";
import { getTheme } from "./theme";
import { Schedule } from "./views/Schedule";
import { TvShow } from "./views/TvShow";

export const App = () => {
  const theme = getTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <PageHeader />
        <Switch>
          <Route path="/" exact>
            <Schedule />
          </Route>
          <Route path="/tvshows/:id" exact>
            <TvShow />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};
