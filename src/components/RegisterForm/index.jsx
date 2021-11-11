import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Box, Heading, VStack, Button, Checkbox } from "@chakra-ui/react";
import Input from "../Input";

const RegisterForm = () => {

  const formSchema = yup.object().shape({
    name: yup.string().required('Valor obrigatorio!')
      .matches(/((?!.*\d)(?!.*\W+))(?=.*[A-Za-z]).*$/g, "Não pode conter numeros"),
    email: yup.string().email('digite um email valido').required('Valor obrigatorio!'),
    password: yup.string().min(6, 'A senha deve ter no minimo 8 caracteres')
      .required('Valor obrigatorio!'),
    passwordConfirm: yup.string().required('Valor obrigatorio!')
      .oneOf([yup.ref('password')], 'Senhas devem ser iguais')
  })

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(formSchema)});
  const handleSigin = (data) => console.log(data);

  return(
    <Box as='form' bg="white" border="3px solid gray" color="black" w="50%" p='4' borderRadius='4' onSubmit={handleSubmit(handleSigin)} >
      <Heading size='lg' >Crie sua conta</Heading>
      <VStack mt='5' spacing="5" >
        <Input placeholder="nome" {...register("name")}/>
        <Input placeholder="email" {...register("email")}/>
        <Input placeholder="senha" {...register("password")}/>
        <Input placeholder="Confirme sua senha" {...register("passwordConfirm")}/>
        <Checkbox size="lg" w="100%" border="black" colorScheme="purple" textaline="left" defaultIsChecked>
          Quero trabalhar como desenvolvedor
        </Checkbox>
        <Button bg="purple.2" color="white" w="100%" _hover={{backgroundColor: "purple.4"}} type="submit">
          Entrar
        </Button>
      </VStack>
    </Box>
  )
}

export default RegisterForm;
