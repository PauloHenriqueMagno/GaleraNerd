import { Switch, Route } from "react-router";
import Register from "../pages/Register";
import Login from "../pages/login";

const Routes = () => {
    return (
        <Switch>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/">
            </Route>
        </Switch>
    );
};

export default Routes;
