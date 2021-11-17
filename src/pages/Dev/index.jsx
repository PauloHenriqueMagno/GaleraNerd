import DevForm from "../../components/DevForm";
import ProjectCard from "../../components/ProjectCard";
import HeaderComponent from "../../components/Header";
import { Box, Flex, Accordion, Heading } from "@chakra-ui/react";

const Dev = () => {
  return (
    <>
      <HeaderComponent />
      <Flex
        align="center"
        justifyContent={{ mobile: "center", desktop: "center" }}
        minHeight="100vh"
        minWidth="100vw"
        bgGradient={{
          mobile: "linear(to-b, purple.2 35%, white 35%)",
          desktop: "linear(to-b, purple.2 50%, white 50%, )",
        }}
      >
        <Box
          m="60px"
          flex-direction="column"
          justifyContent="space-around"
          h="100vh"
          w="100vw"
          maxWidth="1280"
        >
          <DevForm />
          <Heading mt="10" fontSize="34px">
            Meus projetos
          </Heading>
          <Accordion mt="50px" minWidth="500" defaultIndex={[0]} allowMultiple>
            <ProjectCard />
          </Accordion>
        </Box>
      </Flex>
    </>
  );
};

export default Dev;
