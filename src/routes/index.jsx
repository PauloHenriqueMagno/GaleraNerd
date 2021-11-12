import { Switch, Route } from "react-router";
import Login from "../pages/login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
};

export default Routes;
