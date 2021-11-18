import DevForm from "../../components/DevForm";
import ProjectCard from "../../components/ProjectCard";
import HeaderComponent from "../../components/Header";
import { Box, Flex, Accordion, Heading, Button, Icon } from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { ProjectsContext } from "../../providers/Projects";
import { useDev } from "../../providers/Dev";

const Dev = () => {
  const { getDevList, devList } = useDev();
  const { projectList, getProjects } = useContext(ProjectsContext);
  const [showForm, setShowForm] = useState(true);
  const userInfo = JSON.parse(localStorage.getItem("galeranerd/user")) || "";

  useEffect(() => {
    console.log(projectList);
    getProjects();
    let data = devList.filter((dev) => dev.userId === userInfo.id);

    if (data.length > 0) {
      setShowForm(false);
    }
  }, []);

  return (
    <>
      <HeaderComponent />
      <Flex
        align="center"
        justifyContent={{ mobile: "center", desktop: "center" }}
        bgGradient={
          !!showForm
            ? {
                mobile: "linear(to-b, purple.2 85%, white 35%)",
                desktop: "linear(to-b, purple.2 50%, white 50%, )",
              }
            : {
                mobile: "linear(to-b, purple.2 10%, white 10%)",
                desktop: "linear(to-b, purple.2 14%, white 10%, )",
              }
        }
      >
        <Box
          m={{ mobile: "20px", desktop: "60px" }}
          flex-direction="column"
          justifyContent="space-around"
          h="100vh"
          w="100vw"
          maxWidth="1280"
        >
          {!!showForm ? (
            <DevForm setShowForm={setShowForm} />
          ) : (
            <Button
              onClick={() => setShowForm(true)}
              rightIcon={<Icon as={FaEdit} />}
              color="white"
              variant="ghost"
              _hover={{ bg: "purple.5" }}
              fontSize="20px"
            >
              Editar meu perfil
            </Button>
          )}

          <Heading
            mt="10"
            fontSize={{
              mobile: "24px",
              desktop: "34px",
            }}
          >
            Meus projetos
          </Heading>
          <Accordion mt="50px" defaultIndex={[0]} allowMultiple>
            {projectList.map((project) => (
              <ProjectCard
                id={project.userId}
                devId={project.devId}
                projectId={project.id}
                description={project.requestDescription}
                status={project.status}
                budget={project.budget}
              />
            ))}
          </Accordion>
        </Box>
      </Flex>
    </>
  );
};

export default Dev;
