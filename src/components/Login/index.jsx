import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import ComponentInput from "../Input";
import { useHistory, useParams } from "react-router";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormControl } from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { UserContext } from "../../providers/User";
import { useContext } from "react";
import style from "./styles";

const ComponentLogin = () => {
  const { devId } = useParams();
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
    login(data, devId);
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
          <ComponentInput
            errorMessage={errors.email?.message}
            labelMessage="E-mail"
            leftIcon={<EmailIcon />}
            placeholderMessage="Digite seu login"
            register={register}
            registerName={"email"}
          />
          <ComponentInput
            errorMessage={errors.password?.message}
            labelMessage="Senha"
            leftIcon={<LockIcon />}
            rightIcon={<LockIcon />}
            placeholderMessage="Digite sua senha"
            register={register}
            registerName={"password"}
          />
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
