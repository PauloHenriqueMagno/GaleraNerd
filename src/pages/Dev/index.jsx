import DevForm from "../../components/DevForm";
import ProjectCard from "../../components/ProjectCard";
import HeaderComponent from "../../components/Header";
import { Box, Flex, Accordion, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { ProjectsContext } from "../../providers/Projects";

const Dev = () => {
  const { projectList } = useContext(ProjectsContext);
  return (
    <>
      <HeaderComponent />
      <Flex
        align="center"
        justifyContent={{ mobile: "center", desktop: "center" }}
        bgGradient={{
          mobile: "linear(to-b, purple.2 85%, white 35%)",
          desktop: "linear(to-b, purple.2 50%, white 50%, )",
        }}
      >
        <Box
          m={{ mobile: "20px", desktop: "60px" }}
          flex-direction="column"
          justifyContent="space-around"
          h="100vh"
          w="100vw"
          maxWidth="1280"
        >
          <DevForm />
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
                status={project.stats}
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
