import { Switch, Route } from "react-router";
import HeaderComponent from "../components/Header";

const Routes = () => {
    return (
        <Switch>
            <Route path="/">
                <HeaderComponent />
            </Route>
        </Switch>
    );
};

export default Routes;