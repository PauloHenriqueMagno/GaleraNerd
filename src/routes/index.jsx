import { Switch, Route } from "react-router";
import Register from "../pages/Register";

const Routes = () => {
    return (
        <Switch>
            <Route path="/register" component={Register} />
        </Switch>
    );
};

export default Routes;
