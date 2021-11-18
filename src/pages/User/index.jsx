import { Accordion } from "@chakra-ui/accordion";
import { Heading } from "@chakra-ui/layout";
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
        <Heading
          textAlign="center"
          width="100vw"
          as="h1"
          size="2xl"
          isTruncated
        >
          Meus projetos
        </Heading>
        {myProjects.length > 0 ? (
          myProjects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.userId}
              devId={project.devId}
              projectId={project.id}
              description={project.requestDescription}
              status={project.status}
              budget={project.budget}
            />
          ))
        ) : (
          <Heading
            textAlign="center"
            fontSize="20px"
            pt="50px"
            color="purple.2"
            width="100vw"
            as="h1"
            size="2xl"
            isTruncated
          >
            Você ainda não solicitou nenhum projeto
          </Heading>
        )}
      </Accordion>
    </>
  );
};

export default User;
