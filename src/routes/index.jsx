import { Switch, Route } from "react-router";
import Register from "../pages/Register";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Register} />
        </Switch>
    );
};

export default Routes;
