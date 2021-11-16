import { Switch, Route } from "react-router";
import Register from "../pages/Register";
import Login from "../pages/login";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/devsList/:category">
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
