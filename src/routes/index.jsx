import { Switch, Route } from "react-router";
import Register from "../pages/Register";
import Login from "../pages/login";
import Home from "../pages/Home";
import Search from "../pages/Search";
import DevProfile from "../pages/DevProfile";

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
      <Route path="/dev/:id">
        <DevProfile />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
