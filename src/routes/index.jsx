import { Switch, Route } from "react-router";
import Register from "../pages/Register";
import Login from "../pages/login";
import Home from "../pages/Home";
import Search from "../pages/Search";
import DevList from "../pages/DevsList";
import Dev from "../pages/Dev";
import ErrorPage from "../pages/ErrorPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/dev">
        <Dev />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/devsList/:category">
        <DevList />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
};

export default Routes;
