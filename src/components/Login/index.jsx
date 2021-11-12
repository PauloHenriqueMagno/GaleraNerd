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
  FormHelperText,
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
    email: yup
      .string()
      .required("Campo obrigatório")
      .email("Insira um email válido"),
    password: yup.string().required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const submitForm = (data) => {
    login(data);
    JSON.parse(localStorage.getItem("galeranerd/user")).dev
      ? history.push("/dev-profile")
      : history.push("/user-profile");
  };

  return (
    <Box sx={style}>
      <h1 className="loginTitle">
        <strong>Bem vindo!</strong>
      </h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <FormControl
          isInvalid={errors.email?.message && errors.password?.message}
          className="theRealForm"
        >
          <FormLabel>Login</FormLabel>
          <InputGroup>
            <InputLeftElement
              children={<EmailIcon className="emailInputIcon" />}
            />
            <ComponentInput
              errorBorderColor="crimson"
              className="emailInput"
              placeholder="Digite seu login"
              variant="filled"
              register={register}
              registerName="email"
            />
          </InputGroup>
          <FormHelperText>{errors.email?.message}</FormHelperText>
          <FormLabel>Senha</FormLabel>
          <InputGroup>
            <InputLeftElement
              children={<LockIcon className="passwordInputIcon" />}
            />
            <ComponentInput
              errorBorderColor="crimson"
              id="none"
              className="passwordInput"
              type="password"
              placeholder="Digite sua senha"
              register={register}
              variant="outline"
              registerName="password"
            />
          </InputGroup>
          <FormHelperText>{errors.password?.message}</FormHelperText>
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
