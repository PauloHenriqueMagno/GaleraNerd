import { Flex, Image, Button, Box } from "@chakra-ui/react"
import RegisterForm from "../../components/RegisterForm";
import svg from "../../assets/logoRG.svg";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useHistory } from "react-router-dom";

const Register = () => {
  const histori = useHistory();
  return (
    <Box
      pb="8"
      minHeight="100vh" 
      bgGradient={{
        mobile: "linear(to-b, purple.2 35%, white 35%)",
        desktop: "linear(to-r, white 35%, purple.2 35%)",
      }}
    >
        <Button 
          mt="25"
          ml="25"
          p="4" 
          fontSize="2rem" 
          bg="purple.2" color="white" 
          _hover={{backgroundColor: "purple.4"}}
          onClick={() => histori.push('/')}
        >
          <ArrowBackIcon />
        </Button>
      <Flex 
        align="center" 
        justifyContent={{mobile:"center", desktop: "end"}} 
      >

      <RegisterForm />
      <Image src={svg} display={{mobile: "none", desktop: "block"}} w={["0", "0", "35%", "40%"]} ml={["0", "0","5", "10"]} mr={["0", "0","0", "20"]} />
    </Flex>
      </Box>
  )
}

export default Register;
