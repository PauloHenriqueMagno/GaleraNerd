import { Switch, Route } from "react-router";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Search from "../pages/Search";
import User from "../pages/User";

const Routes = () => {
  return (
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/devsList/:category"></Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/user">
        <User />
      </Route>
    </Switch>
  );
};

export default Routes;
