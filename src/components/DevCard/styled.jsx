import { chakra } from "@chakra-ui/react";

export const DevCardLi = chakra("div", {
  baseStyle: {
    margin: "20px 0",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "grey.5",
    padding: "30px",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "20px",
    background: "white",
    svg: {
      fontSize: "30px",
    },
  },
});

export const DevCardHeader = chakra("header", {
  baseStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: "2px",
    borderStyle: "solid",
    borderColor: "grey.5",
    padding: "0 15px 15px",
    gap: "10px",
  },
});

export const DevCardHeaderDiv = chakra("div", {
  baseStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    gap: "5px",
    color: "black.1",

    p: {
      color: "purple.2",
      fontWeight: 600,
    },
  },
});

export const DevCardHeaderDevIcon = chakra("div", {
  baseStyle: {
    display: "block",
    minWidth: "60px",
    height: "60px",

    svg: {
      width: "100%",
      height: "100%",
    },
  },
});

export const DevCardBody = chakra("div", {
  baseStyle: {
    display: "flex",
    flexDirection: "column",
    fontWeight: 400,
    color: "black.2",
    padding: "15px 5px 0",
    gap: "15px",
    backgroundColor: "white",
    fontSize: "14px",
  },
});

export const DevCardTags = chakra("ul", {
  baseStyle: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "10px",
  },
});

export const DevCardTag = (text) => {
  const Element = chakra("li", {
    baseStyle: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      width: "max-content",
      alignItems: "center",
      padding: "5px 10px",
      background: "rgba(70, 48, 171, 0.2)",
      color: "purple.2",
      fontWeight: "medium",
      fontSize: "10px",
    },
  });

  return <Element>{text}</Element>;
};
