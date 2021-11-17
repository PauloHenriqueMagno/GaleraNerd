const style = {
  color: "black",
  bgColor: "white",
  p: 15,
  border: "solid #f5f5f5 2px",
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
