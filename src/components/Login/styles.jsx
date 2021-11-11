const style = {
  color: "black",
  bgColor: "white",
  p: 15,
  width: { mobile: "90%", desktop: 450 },
  height: { mobile: "80%", desktop: 410 },
  borderRadius: 8,
  ".loginTitle": {
    fontSize: "25px",
    ml: 15,
  },
  ".theRealForm": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "max-content",
    label: {
      alignSelf: "flex-start",
      ml: 15,
    },
  },
  ".emailInputIcon": {
    color: "gray",
    transform: "translate(50%, 50%)",
    position: "absolute",
    left: "50%",
    top: "65%",
  },
  ".emailInput": {
    m: 5,
    p: "0 30px",
    width: "90%",
    bgColor: "lightgray",
    color: "black",
    _placeholder: {
      color: "black",
    },
  },
  ".passwordInputIcon": {
    color: "gray",
    transform: "translate(50%, 50%)",
    position: "absolute",
    left: "50%",
    top: "60%",
  },
  ".passwordInput": {
    borderColor: "black",
    m: 5,
    p: "0 30px",
    width: "90%",
    bgColor: "white",
    color: "black",
    _placeholder: {
      color: "black",
    },
  },
  ".toRegister": {
    ":hover": {
      cursor: "pointer",
      textDecoration: "underline",
    },
  },
  button: {
    backgroundColor: "purple.1",
    color: "white",
    ":hover": {
      backgroundColor: "purple.1",
      filter: "grayscale(20%)",
    },
  },
};

export default style;
