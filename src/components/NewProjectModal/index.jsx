import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Text,
  Button,
  Icon,
} from "@chakra-ui/react";
import TextAreaInput from "../TextAreaInput";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FaFileAlt } from "react-icons/fa";
import { useUser } from "../../providers/User";
import { useProjects } from "../../providers/Projects";

const NewProjectModal = ({ isOpen, onOpen, onClose, devId }) => {
  const { userInfo } = useUser();
  const { createProject } = useProjects();

  const modalSchema = yup.object().shape({
    projectDescription: yup
      .string()
      .required(
        "É necessário preencher a descrição para solicitar o orçamento"
      ),
  });

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({ resolver: yupResolver(modalSchema) });

  const submitProject = (data) => {
    const requestData = {
      status: "Aguardando orçamento",
      requestDescription: data.projectDescription,
      budget: null,
      devId: devId,
      userId: userInfo.id,
    };
    createProject(requestData);
    onClose();
    resetField("projectDescription");
  };

  const submitCancel = () => {
    onClose();
    resetField("projectDescription");
  };

  return (
    <Modal isOpen={isOpen} onClose={submitCancel}>
      <ModalOverlay />
      <ModalContent
        bg="white"
        color="black.2"
        w={{ mobile: "95%", desktop: "100%" }}
      >
        <ModalHeader display="flex">
          <Icon
            as={FaFileAlt}
            bg="purple.2"
            color="white"
            w="30px"
            h="30px"
            p="5px 8px"
            borderRadius="5px"
            marginRight="13px"
          />
          <Text color="black.1">Solicite um orçamento</Text>
        </ModalHeader>
        <ModalCloseButton
          bg="error"
          color="white"
          marginTop="7px"
          marginRight="11px"
          _hover={{ color: "white", bg: "error" }}
          _focus={{ boxShadow: "none" }}
        />
        <ModalBody>
          <Text marginBottom="23px">
            Descreva o projeto que você quer tirar do papel?
          </Text>
          <TextAreaInput
            register={register}
            registerName="projectDescription"
            errorMessage={errors.projectDescription?.message}
            placeholder="Descreva seu projeto..."
          />
        </ModalBody>
        <ModalFooter justifyContent="space-between">
          <Button
            onClick={submitCancel}
            variant="solid"
            bg="grey.4"
            size="lg"
            color="grey.2"
            w="160px"
            marginRight="12px"
            _hover={{ bg: "grey.5", color: "black.2" }}
          >
            Cancelar
          </Button>
          <Button
            onClick={handleSubmit(submitProject)}
            variant="solid"
            size="lg"
            bg="purple.2"
            color="white"
            flex="1"
            _hover={{ bg: "purple.5" }}
          >
            Enviar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NewProjectModal;
