import { Switch, Route } from "react-router";
import Register from "../pages/Register";
import Login from "../pages/login";
import Home from "../pages/Home";
import Search from "../pages/Search";
import DevList from "../pages/DevsList";
import Dev from "../pages/Dev";
import ErrorPage from "../pages/ErrorPage";
import ProjectCard from "../components/ProjectCard";
import { Accordion } from "@chakra-ui/accordion";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Accordion allowToggle>
          <ProjectCard id="1" devId="2" projectId="1" description="Descrição" status="Aguardando orçamento"  />
          <ProjectCard id="1" devId="2" projectId="1" description="Descrição" status="Aguardando orçamento"  />
          <ProjectCard id="1" devId="2" projectId="1" description="Descrição" status="Aguardando orçamento"  />
        </Accordion>
      </Route>
      <Route path="/dev">
        <Dev />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login:devId">
        <Login />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/devsList/:category">
        <DevList />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
};

export default Routes;
