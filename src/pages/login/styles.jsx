const style = {
  ".contentContainer": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 1280,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { desktop: "100vw" },
  },
  background: {
    mobile:
      "linear-gradient(180deg, #4630AB 0 36.1111111115%,  white 36.1111111115% 100%)",
    desktop:
      "linear-gradient(to right, #4630AB 0 66.2499999984%,  white 66.2499999984% 100%)",
  },
  height: "100vh",
  ".loginSVG": {
    flex: 1,
  },
  ".loginForm": { flex: 1, ml: { desktop: "5%" } },
  ".arrowBackIcon": {
    fontSize: "27px",
    position: "absolute",
    m: 25,
    bottom: 0
  },
};

export default style;
