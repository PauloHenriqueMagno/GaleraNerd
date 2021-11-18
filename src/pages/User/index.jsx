import { Accordion } from "@chakra-ui/accordion";
import { Heading } from "@chakra-ui/layout";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import Header from "../../components/Header";
import ProjectCard from "../../components/ProjectCard";
import { ProjectsContext } from "../../providers/Projects";
import { UserContext } from "../../providers/User";

const User = () => {
  const { userInfo } = useContext(UserContext);
  const { projectList, getProjects } = useContext(ProjectsContext);
  const history = useHistory();
  useEffect(() => {
    getProjects();
    if (
      userInfo.dev === true ||
      !!JSON.parse(localStorage.getItem("galeranerd/token")) === false
    ) {
      history.push("/");
    }
  }, []);

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
              id={project.devId}
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
