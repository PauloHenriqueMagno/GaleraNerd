import { Accordion } from "@chakra-ui/accordion";
import { useContext, useEffect } from "react";
import Header from "../../components/Header";
import ProjectCard from "../../components/ProjectCard";
import { ProjectsContext } from "../../providers/Projects";
import { UserContext } from "../../providers/User";

const User = () => {
  const { userInfo } = useContext(UserContext);
  const { projectList, getProjects } = useContext(ProjectsContext);
  useEffect(() => {
    getProjects();
    console.log(userInfo.id);
  }, []);
  console.log(projectList);
  // console.log();
  console.log(
    "projetos filtrados: ",
    projectList.filter((project) => project.userId === userInfo.id)
  );
  const myProjects = projectList.filter(
    (project) => project.userId === userInfo.id
  );
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
        {myProjects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.userId}
            devId={project.devId}
            projectId={project.id}
            description={project.requestDescription}
            status={project.status}
            budget={project.budget}
          />
        ))}
      </Accordion>
    </>
  );
};

export default User;
