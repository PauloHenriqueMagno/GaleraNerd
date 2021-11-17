import { chakra } from "@chakra-ui/react";

import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";

const color = (status) =>
  status === "Finalizado" || status === "Concluido"
    ? "#168821"
    : status === "Em andamento" ||
      status === "Aguardando orçamento" ||
      status === "Confirmar o orçamento"
    ? "#FF7F00"
    : status === "Recusado"
    ? "#DF1545"
    : "#F6F6F7";

export const AccordionItemStyled = ({ children, key, status, ...rest }) => {
  const style = {
    m: {mobile: "25px", desktop: "36px"},
    border: `2px solid ${color(status)}`,
    borderRadius: "8px",
    background: "grey.3",

    ".ProjectDescription": {
      borderTop: `2px solid ${color(status)}`,
    },

    ".borderBottom": {
      padding: "10px 0 15px 0",
      borderBottom: `1px solid ${color(status)}`,
    },
  };

  return (
    <AccordionItem key={key} sx={style}>
      {children}
    </AccordionItem>
  );
};

export const AccordionButtonStyled = chakra(AccordionButton, {
  baseStyle: {
    _focus: {
      outline: "none",
      boxShadow: "none",
    },

    p: {
      marginLeft: "auto",
      marginRight: "15px",
    },
  },
});

export const AccordionPanelStyled = chakra(AccordionPanel, {
  baseStyle: {
    display: "flex",
    flexDirection: "column",
    background: "white",
    gap: "10px",
    borderRadius: "0 0 8px 8px",
  },
});

export const ButtonStyled = ({children, color, ...rest}) => {
    const Button = chakra("button", {
        baseStyle: {
            background: (color==="red"? "error": "purple.2"),
            width: "max-content",
            padding: "10px",
            borderRadius: "5px",
            color: "white",

            _hover: {
                filter: "brightness(50%)"
            },
        },
    });

  return <Button {...rest}>{children}</Button>;
};
