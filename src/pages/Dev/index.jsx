import DevForm from "../../components/DevForm";
import ProjectCard from "../../components/ProjectCard";
import HeaderComponent from "../../components/Header";
import { Box, Flex, Accordion, Heading, Button, Icon } from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { ProjectsContext } from "../../providers/Projects";
import { useDev } from "../../providers/Dev";
import { useHistory } from "react-router";

const Dev = () => {
  const { devList } = useDev();
  const { projectList, getProjects } = useContext(ProjectsContext);
  const [showForm, setShowForm] = useState(true);
  const userInfo = JSON.parse(localStorage.getItem("galeranerd/user")) || "";
  const [filteredProjects, setFilteredProject] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getProjects();
    let data = devList.filter((dev) => dev.userId === userInfo.id);
    if (userInfo.dev !== true) {
      history.push("/");
    }
    if (data.length > 0) {
      setShowForm(false);
    }
  }, []);

  useEffect(() => {
    setFilteredProject(
      projectList.filter((project) => project.devId === userInfo.id)
    );
  }, [projectList]);

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
                desktop: "linear(to-b, purple.2 100px, white 0px, )",
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
            {filteredProjects.length === 0 ? (
              <Heading
                fontSize="20px"
                align={{ mobile: "center", desktop: "center" }}
                color="purple.2"
              >
                Voc?? ainda n??o possui nenhum projeto em andamento.
              </Heading>
            ) : (
              <>
                {filteredProjects.map((project) => (
                  <ProjectCard
                    id={project.userId}
                    devId={project.devId}
                    projectId={project.id}
                    description={project.requestDescription}
                    status={project.status}
                    budget={project.budget}
                    dev={userInfo.dev}
                  />
                ))}
              </>
            )}
          </Accordion>
        </Box>
      </Flex>
    </>
  );
};

export default Dev;
