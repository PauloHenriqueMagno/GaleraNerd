import DevForm from "../../components/DevForm";
// import ProjectCard from "../../components/ProjectCard";
import HeaderComponent from "../../components/Header";
import { Flex } from "@chakra-ui/react";

const Dev = () => {
  return (
    <>
      <HeaderComponent />
      <Flex
        align="center"
        justifyContent={{ mobile: "center", desktop: "flex-start" }}
        minHeight="100vh"
        minWidth="100vw"
        bgGradient={{
          mobile: "linear(to-b, purple.2 35%, white 35%)",
          desktop: "linear(to-b, purple.2 50%, white 50%, )",
        }}
      >
        <DevForm />
        {/* <ProjectCard /> */}
      </Flex>
    </>
  );
};

export default Dev;
