import { Box, Flex, Heading, Button, Text, Image } from "@chakra-ui/react";
import ErrorImg from "../../assets/ErrorImg.svg";
import HeaderComponent from "../../components/Header";
import { useHistory } from "react-router-dom";

const ErrorPage = () => {
  const history = useHistory();
  return (
    <>
      <HeaderComponent />
      <Flex
        padding={["10px 15px", "10 15px", "0px", "0px"]}
        alignItems="center"
        justifyContent="space-evenly"
        height={["auto", "auto", "100vh", "100vh"]}
        flexDirection={["column-reverse", "column-reverse", "row", "row"]}
      >
        <Box mt="4">
          <Heading> Oooops! </Heading>
          <Text mt="4">
            Não encontramos a página que você procurou, <br />
            <b>tente novamente.</b>
          </Text>
          <Button
            mt="4"
            bg="red.600"
            h="60px"
            color="white"
            w="100%"
            _hover={{ bg: "red:700" }}
            onClick={() => history.push("/")}
          >
            Tentar novamente
          </Button>
        </Box>
        <Image scr={ErrorImg} />
      </Flex>
    </>
  );
};

export default ErrorPage;
