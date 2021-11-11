import { Flex, Image } from "@chakra-ui/react"
import RegisterForm from "../../components/RegisterForm";
import svg from "../../assets/logoRG.svg"

const Register = () => {
  return (
    <Flex align="center" justify="flex-end" height="100vh" bgGradient="linear(to-r, white 35%, purple.2 35%)">
      
      <RegisterForm />
      <Image src={svg} w="40%" mx="90" />
    </Flex>
  )
}

export default Register;
