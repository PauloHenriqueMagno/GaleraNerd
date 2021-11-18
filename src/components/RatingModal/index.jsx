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
  Flex,
  Box,
} from "@chakra-ui/react";
import TextAreaInput from "../TextAreaInput";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FaFileAlt } from "react-icons/fa";
import StarRating from "../StarRating";
import { useFeedbacks } from "../../providers/Feedbacks";
import { useEffect } from "react";
import { useUser } from "../../providers/User";

const RatingModal = ({ isOpen, onClose, devId, changeProjectStatus }) => {
  const { userInfo } = useUser();
  const { feedbackList, getFeedbacks, editFeedback } = useFeedbacks();

  const modalSchema = yup.object().shape({
    attendance: yup
      .mixed("É necessário avaliar o dev.")
      .required("É necessário avaliar o dev."),
    price: yup
      .mixed("É necessário avaliar o dev.")
      .required("É necessário avaliar o dev."),
    recommendation: yup
      .mixed("É necessário avaliar o dev.")
      .required("É necessário avaliar o dev."),
    comment: yup
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
    const devFeedbacks = feedbackList.filter(
      (feedback) => feedback.devId === devId
    );

    devFeedbacks[0].attendance.push({
      userId: userInfo.id,
      attendance: Number(data.attendance),
    });
    devFeedbacks[0].price.push({
      userId: userInfo.id,
      price: Number(data.price),
    });
    devFeedbacks[0].recommendation.push({
      userId: userInfo.id,
      recommendation: Number(data.recommendation),
    });
    devFeedbacks[0].comment.push({
      userId: userInfo.id,
      comment: data.comment,
    });

    editFeedback(devFeedbacks[0]);
    onClose();
    resetField("");
    changeProjectStatus();
  };

  const submitCancel = () => {
    onClose();
    resetField("");
  };

  useEffect(() => {
    getFeedbacks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <Flex direction="column">
            <Text color="black.1">Avalie o Desenvolvedor</Text>
            <Text fontWeight="medium" fontSize="14px">
              Sua avaliação é muito importante para nós
            </Text>
          </Flex>
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
          <Box marginBottom="23px">
            <Text>Como você avalia o atendimento?</Text>
            <StarRating
              register={register}
              name="attendance"
              errorMessage={errors.attendance?.message}
              w="30px"
              h="30px"
            />
          </Box>
          <Box marginBottom="23px">
            <Text>Como você avalia a faixa de preço do Dev?</Text>
            <StarRating
              register={register}
              name="price"
              errorMessage={errors.price?.message}
              w="30px"
              h="30px"
            />
          </Box>
          <Box marginBottom="23px">
            <Text>O quanto você recomendaria o Dev?</Text>
            <StarRating
              register={register}
              name="recommendation"
              errorMessage={errors.recommendation?.message}
              w="30px"
              h="30px"
            />
          </Box>
          <Box>
            <Text marginBottom="23px">Deixe um comentário:</Text>
            <TextAreaInput
              register={register}
              registerName="comment"
              errorMessage={errors.comment?.message}
              placeholder="Digite seu comentário..."
            />
          </Box>
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

export default RatingModal;
