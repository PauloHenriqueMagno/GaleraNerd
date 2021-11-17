import { Accordion } from "@chakra-ui/accordion";
import { useContext } from "react";
import Header from "../../components/Header";
import ProjectCard from "../../components/ProjectCard";
import { ProjectsContext } from "../../providers/Projects";

const User = () => {
  const { projectList } = useContext(ProjectsContext);
  console.log(projectList);
  return (
    <>
      <Header />
      <Accordion
        allowToggle
        sx={{
          width: { mobile: "100vw", desktop: "60vw" },
          maxW: "1280px",
          m: "0",
        }}
      >
        <ProjectCard
          sx={{ m: 5 }}
          id="1"
          devId="2"
          projectId="3"
          description="quero café"
          status="Em andamento"
          budget="2 conto ta bão"
        />
        <ProjectCard
          sx={{ m: 5 }}
          id="1"
          devId="2"
          projectId="3"
          description="quero café"
          status="Finalizado"
          budget="2 conto ta bão"
        />
        <ProjectCard
          sx={{ m: 5 }}
          id="1"
          devId="2"
          projectId="3"
          description="quero café"
          status="Recusado"
          budget="2 conto ta bão"
        />
        <ProjectCard
          sx={{ m: 5 }}
          id="1"
          devId="2"
          projectId="3"
          description="quero café"
          status="Finalizado"
          budget="2 conto ta bão"
        />
        <ProjectCard
          sx={{ m: 5 }}
          id="1"
          devId="2"
          projectId="3"
          description="quero café"
          status="Finalizado"
          budget="2 conto ta bão"
        />
        {projectList.map((project) => (
          <ProjectCard
            id="1"
            devId="2"
            projectId="3"
            description="quero café"
            status="Finalizado"
            budget="2 conto ta bão"
          />
        ))}
      </Accordion>
    </>
  );
};

export default User;
