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
} from "@chakra-ui/react";
import TextAreaInput from "../TextAreaInput";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const NewProjectModal = ({ isOpen, onOpen, onClose }) => {
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
    onClose();
    resetField("projectDescription");
  };

  const submitCancel = () => {
    onClose();
    resetField("projectDescription");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="white" color="black.2">
        <ModalHeader>
          <Text color="black.1">Solicite um orçamento</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Descreva o projeto que você quer tirar do papel?</Text>
          <TextAreaInput
            register={register}
            registerName="projectDescription"
            errorMessage={errors.projectDescription?.message}
            placeholder="Descreva seu projeto..."
          />
        </ModalBody>
        <ModalFooter>
          <Button onClick={submitCancel}>Cancelar</Button>
          <Button onClick={handleSubmit(submitProject)}>Enviar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NewProjectModal;
