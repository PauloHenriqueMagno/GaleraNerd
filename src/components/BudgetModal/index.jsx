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
import { useProjects } from "../../providers/Projects";

const BudgetModal = ({ isOpen, onOpen, onClose, projectId }) => {
  const { editProject } = useProjects();

  const modalSchema = yup.object().shape({
    budget: yup
      .string()
      .required("É necessário preencher o orçamento para enviar"),
  });

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({ resolver: yupResolver(modalSchema) });

  const submitBudget = (data) => {
    const requestData = {
      id: projectId,
      status: "Aprovação pendente",
      budget: data.budget,
    };
    editProject(requestData);
    onClose();
    resetField("budget");
  };

  const submitCancel = () => {
    onClose();
    resetField("budget");
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
          <Text color="black.1">Enviar orçamento</Text>
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
            Descreva o melhor possível seu orçamento:
          </Text>
          <TextAreaInput
            register={register}
            registerName="budget"
            errorMessage={errors.budget?.message}
            placeholder="Digite seu orçamento..."
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
            onClick={handleSubmit(submitBudget)}
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

export default BudgetModal;
