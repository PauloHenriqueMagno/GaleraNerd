import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import ComponentInput from "../Input";
import { useHistory } from "react-router";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  // FormHelperText,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";

import { InputGroup, InputLeftElement } from "@chakra-ui/input";

const ComponentLogin = () => {
  const history = useHistory();
  const formSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email(),
    password: yup.string().required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <Box
      sx={{
        color: "black",
        bgColor: "white",
        p: 15,
        width: { mobile: "90%", desktop: 450 },
        height: { mobile: "80%", desktop: 410 },
        borderRadius: 8,
        ".loginTitle": {
          fontSize: "25px",
          ml: 15,
        },
        ".theRealForm": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "max-content",
          label: {
            alignSelf: "flex-start",
            ml: 15,
          },
        },
      }}
    >
      <h1 className="loginTitle">
        <strong>Bem vindo!</strong>
      </h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <FormControl className="theRealForm">
          <FormLabel>Login</FormLabel>
          <InputGroup>
            <InputLeftElement
              children={
                <EmailIcon
                  color="gray"
                  transform="translate(50%, 50%)"
                  position="absolute"
                  left="50%"
                  top="65%"
                />
              }
            />
            <ComponentInput
              sx={{
                m: 5,
                p: "0 30px",
                width: "90%",
                bgColor: "lightgray",
                color: "black",
                _placeholder: {
                  color: "black",
                },
              }}
              placeholder="Digite seu login"
              register={register}
              variant="filled"
              registerName="email"
            />
          </InputGroup>
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          <FormLabel>Senha</FormLabel>
          <InputGroup>
            <InputLeftElement
              children={
                <LockIcon
                  color="gray"
                  transform="translate(50%, 50%)"
                  position="absolute"
                  left="50%"
                  top="60%"
                />
              }
            />
            <ComponentInput
              sx={{
                borderColor: "black",
                m: 5,
                p: "0 30px",
                width: "90%",
                bgColor: "white",
                color: "black",
                _placeholder: {
                  color: "black",
                },
              }}
              placeholder="Digite sua senha"
              register={register}
              variant="outline"
              registerName="password"
            />
          </InputGroup>
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          <Button
          sx={{backgroundColor:"purple.1", color: "white"}}
          >Entrar</Button>
          <p onClick={() => history.push("/register")}>
            Ainda não tem uma conta? Crie uma agora
          </p>
        </FormControl>
      </form>
    </Box>
  );
};

export default ComponentLogin;
