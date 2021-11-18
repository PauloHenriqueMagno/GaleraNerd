import { Accordion } from "@chakra-ui/accordion";
import { Box } from "@chakra-ui/layout";
import { useContext, useEffect } from "react";
import Header from "../../components/Header";
import ProjectCard from "../../components/ProjectCard";
import { ProjectsContext } from "../../providers/Projects";

const User = () => {
  const { projectList, getProjects } = useContext(ProjectsContext);
  useEffect(() => {
    getProjects();
  }, []);
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
        {projectList.map((project) => (
          <Box key={project.id}>
            <ProjectCard
              id={project.userId}
              devId={project.devId}
              projectId={project.id}
              description={project.requestDescription}
              status={project.status}
              budget={project.budget}
            />
          </Box>
        ))}
      </Accordion>
    </>
  );
};

export default User;
