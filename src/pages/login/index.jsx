import { Box } from "@chakra-ui/layout";
import ComponentLogin from "../../components/Login";
import style from "./styles";
import LoginSVG from "../../assets/loginSVG";
import { useState } from "react";

const Login = () => {
  const [width, setWidth] = useState(window.innerWidth);
  window.onresize = () => {
    setWidth(window.innerWidth);
  };
  return (
    <Box sx={style}>
      <Box className="contentContainer">
        {width > 769 && <LoginSVG className="loginSVG" />}
        <ComponentLogin />
      </Box>
    </Box>
  );
};

export default Login;
