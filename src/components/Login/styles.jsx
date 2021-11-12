const style = {
  color: "black",
  bgColor: "white",
  p: 15,
  border: "solid #4630AB 2px",
  width: { mobile: "90vw", desktop: "100%" },
  height: { mobile: "80%", desktop: 480 },
  maxWidth: 500,
  borderRadius: 8,
  ".loginTitle": {
    fontSize: "25px",
    ml: 15,
    mt: 5,
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
      md: 0,
    },
  },
  ".emailInputIcon": {
    color: "gray",
    transform: "translate(50%, 50%)",
    position: "absolute",
    left: "50%",
    top: "13%",
  },
  ".emailInput": {
    m: 5,
    mt: 0,
    mb: 0,
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
    top: "13%",
  },
  ".passwordInput": {
    borderColor: "black",
    m: 5,
    mt: 0,
    mb: 0,
    p: "0 30px",
    width: "90%",
    bgColor: "white",
    color: "black",
    _placeholder: {
      color: "black",
    },
  },
  ".toRegister": {
    color: "purple.2",
    fontWeight: "bold",
    m: 5,
    ":hover": {
      cursor: "pointer",
      textDecoration: "underline",
    },
  },
  button: {
    backgroundColor: "purple.2",
    width: "89%",
    height: { mobile: 35, desktop: 50 },
    boxSizing: "border-box",
    color: "white",
    mt: 5,
    mb: 30,
    ":hover": {
      backgroundColor: "purple.2",
      filter: "grayscale(20%)",
    },
  },
  ".loginInputContainer": {
    width: "100%",
  },
  ".css-1owdgwf": {
    color: "error",
    textAlign: "start",
    m: 0,
  },
};

export default style;
