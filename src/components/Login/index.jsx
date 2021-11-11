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
import { UserContext } from "../../providers/User";
import { useContext } from "react";

import { InputGroup, InputLeftElement } from "@chakra-ui/input";
import style from "./styles";

const ComponentLogin = () => {
  const { login } = useContext(UserContext);
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
    login(data);

    // data.user.dev
    //   ? history.push("/dev-profile")
    //   : history.push("/user-profile");
  };

  return (
    <Box sx={style}>
      <h1 className="loginTitle">
        <strong>Bem vindo!</strong>
      </h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <FormControl className="theRealForm">
          <FormLabel>Login</FormLabel>
          <InputGroup>
            <InputLeftElement
              children={<EmailIcon className="emailInputIcon" />}
            />
            <ComponentInput
              className="emailInput"
              placeholder="Digite seu login"
              variant="filled"
              register={register}
              registerName="email"
            />
          </InputGroup>
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          <FormLabel>Senha</FormLabel>
          <InputGroup>
            <InputLeftElement
              children={<LockIcon className="passwordInputIcon" />}
            />
            <ComponentInput
              id="none"
              className="passwordInput"
              type="password"
              placeholder="Digite sua senha"
              register={register}
              variant="outline"
              registerName="password"
            />
          </InputGroup>
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          <Button type="submit">Entrar</Button>
          <p>Ainda não tem uma conta?</p>
          <p className="toRegister" onClick={() => history.push("/register")}>
            Crie uma agora!
          </p>
        </FormControl>
      </form>
    </Box>
  );
};

export default ComponentLogin;
