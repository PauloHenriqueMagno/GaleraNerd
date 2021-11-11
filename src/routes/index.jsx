import { Switch, Route } from "react-router";
import Login from "../pages/Login";

const Routes = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" />
        </Switch>
    );
};

export default Routes;
