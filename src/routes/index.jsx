import { Switch, Route } from "react-router";
import CategoryCardList from "../components/CategoryCardList";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <CategoryCardList />
      </Route>
      <Route path="/devsList/:category"></Route>
    </Switch>
  );
};

export default Routes;
