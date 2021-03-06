import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUser } from "../../providers/User";
import { useHistory } from "react-router-dom";

import {
  FormControl,
  Box,
  Heading,
  VStack,
  Button,
  Checkbox,
  Text,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { FaEye, FaEyeSlash, FaUserAlt } from "react-icons/fa";
import Input from "../Input";
import { useState } from "react";

const RegisterForm = () => {
  const history = useHistory();
  const { register: registerUser } = useUser();

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Valor obrigatorio!")
      .matches(
        /((?!.*\d)(?!.*\W+))(?=.*[A-Za-z]).*$/g,
        "Não pode conter numeros"
      ),
    email: yup
      .string()
      .email("digite um email valido")
      .required("Valor obrigatorio!"),
    password: yup
      .string()
      .min(6, "A senha deve ter no minimo 8 caracteres")
      .required("Valor obrigatorio!"),
    passwordConfirm: yup
      .string()
      .required("Valor obrigatorio!")
      .oneOf([yup.ref("password")], "Senhas devem ser iguais"),
    dev: yup.boolean(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });
  const handleSigin = (data) => {
    registerUser(data);
  };

  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const handleClick = () => setShow(!show);
  const handleClickConfirm = () => setShowConfirm(!showConfirm);

  return (
    <Box
      mt="15px"
      as="form"
      bg="white"
      border="3px solid"
      borderColor="purple.2"
      color="black"
      minWidth="300px"
      maxWidth="500px"
      w={{ mobile: "90%", desktop: "30%" }}
      p="4"
      borderRadius="4"
      onSubmit={handleSubmit(handleSigin)}
    >
      <FormControl
        isInvalid={
          errors.email?.message &&
          errors.password?.message &&
          errors.name?.message &&
          errors.passwordConfirm?.message
        }
      >
        <Heading size="lg">Crie sua conta</Heading>
        <VStack mt="5" spacing="5">
          <Input
            placeholder="Nome"
            register={register}
            registerName="name"
            labelMessage="Nome"
            leftIcon={<FaUserAlt />}
            errorMessage={errors.name?.message}
          />
          <Input
            labelMessage="Email"
            placeholder="Email"
            register={register}
            leftIcon={<EmailIcon />}
            registerName="email"
            errorMessage={errors.email?.message}
          />
          <Input
            labelMessage="Senha"
            placeholder="Senha"
            register={register}
            leftIcon={<LockIcon />}
            registerName="password"
            errorMessage={errors.password?.message}
            type={show ? "text" : "password"}
            rightIcon={
              show ? (
                <FaEyeSlash onClick={handleClick} />
              ) : (
                <FaEye onClick={handleClick} />
              )
            }
          />
          <Input
            labelMessage="Confirme sua senha"
            placeholder="Confirme sua senha"
            register={register}
            registerName="passwordConfirm"
            errorMessage={errors.passwordConfirm?.message}
            leftIcon={<LockIcon />}
            type={showConfirm ? "text" : "password"}
            rightIcon={
              showConfirm ? (
                <FaEyeSlash onClick={handleClickConfirm} />
              ) : (
                <FaEye onClick={handleClickConfirm} />
              )
            }
          />
          <Checkbox
            size="lg"
            w="100%"
            border="black"
            colorScheme="purple"
            textaline="left"
            {...register("dev")}
          >
            Quero trabalhar como{" "}
            <Text color="purple.2" display="inline">
              desenvolvedor
            </Text>
          </Checkbox>
          <Button
            bg="purple.2"
            color="white"
            w="100%"
            _hover={{ backgroundColor: "purple.4" }}
            type="submit"
          >
            Cadastrar
          </Button>
        </VStack>
      </FormControl>
    </Box>
  );
};

export default RegisterForm;
