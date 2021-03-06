import {
  AccordionItemStyled,
  AccordionButtonStyled,
  AccordionPanelStyled,
  ButtonStyled,
} from "./styled";

import { useEffect, useState } from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import api from "../../services";
import BudgetModal from "../BudgetModal";
import { useProjects } from "../../providers/Projects";
import RatingModal from "../RatingModal";
import { Flex, AccordionIcon } from "@chakra-ui/react";

const ProjectCard = ({
  id,
  devId,
  projectId,
  description,
  status,
  budget,
  dev = false,
  ...rest
}) => {
  const { editProject } = useProjects();
  const [name, setName] = useState();
  const [Status, setStatus] = useState(status);
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [isOpenRating, setIsOpenRating] = useState(false);

  const getName = () => {
    api.get(`/users/${id}`).then((response) => setName(response.data.name));
  };

  const changeStatus = (close = false) => {
    const data = {
      id: projectId,
      status: close
        ? "Recusado"
        : Status === "Aguardando orçamento"
        ? "Confirmar o orçamento"
        : Status === "Confirmar o orçamento"
        ? "Em andamento"
        : Status === "Em andamento"
        ? "Concluido"
        : "Finalizado",
    };

    setStatus(data.status);
    editProject(data);
  };

  const Buttons = () => {
    if (!dev && Status === "Concluido") {
      return (
        <ButtonStyled onClick={() => setIsOpenRating(true)} marginLeft="auto">
          Finalizar projeto e avaliar
        </ButtonStyled>
      );
    }
    if (!dev && Status === "Aguardando orçamento") {
      return (
        <ButtonStyled disabled={true} marginLeft="auto">
          Aguardando orçamento
        </ButtonStyled>
      );
    }
    if (!dev && Status === "Confirmar o orçamento") {
      return (
        <Flex justifyContent="space-between">
          <ButtonStyled color="red" onClick={() => changeStatus(true)}>
            Recusar
          </ButtonStyled>
          <ButtonStyled onClick={() => changeStatus()} marginLeft="auto">
            Aceitar orçamento
          </ButtonStyled>
        </Flex>
      );
    }
    if (!dev && Status === "Em andamento") {
      return (
        <ButtonStyled disabled={true} marginLeft="auto">
          Aguardando Nerd finalizar o projeto
        </ButtonStyled>
      );
    }
    if (dev && Status === "Em andamento") {
      return (
        <ButtonStyled onClick={() => changeStatus()} marginLeft="auto">
          Concluido
        </ButtonStyled>
      );
    }
    if (dev && Status === "Aguardando orçamento") {
      return (
        <Flex justifyContent="space-between">
          <ButtonStyled color="red" onClick={() => changeStatus(true)}>
            Recusar
          </ButtonStyled>
          <ButtonStyled onClick={() => onOpen()} marginLeft="auto">
            Fazer orçamento
          </ButtonStyled>
        </Flex>
      );
    }
    if (dev && (Status === "Confirmar o orçamento" || Status === "Concluido")) {
      return (
        <ButtonStyled disabled={true} marginLeft="auto">
          Aguardando confirmação do cliente
        </ButtonStyled>
      );
    } else {
      return <></>;
    }
  };

  useEffect(() => {
    getName();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AccordionItemStyled status={Status} {...rest}>
      <AccordionButtonStyled>
        <h3>{name}</h3>
        <p>{Status}</p>
        <AccordionIcon />
      </AccordionButtonStyled>
      <AccordionPanelStyled className="ProjectDescription">
        <p className="borderBottom">{description}</p>

        {budget && <p>{budget}</p>}
        <Buttons />

        {(dev || Status === "Aguardando orçamento") && (
          <BudgetModal
            ChangeStatus={changeStatus}
            isOpen={isOpen}
            onClose={onClose}
            projectId={projectId}
          />
        )}
        {!dev && (
          <RatingModal
            isOpen={isOpenRating}
            onClose={() => setIsOpenRating(false)}
            devId={devId}
            changeProjectStatus={changeStatus}
          />
        )}
      </AccordionPanelStyled>
    </AccordionItemStyled>
  );
};

export default ProjectCard;
