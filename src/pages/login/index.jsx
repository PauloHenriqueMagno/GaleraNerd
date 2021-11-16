import { Box } from "@chakra-ui/layout";
import ComponentLogin from "../../components/Login";
import style from "./styles";
import LoginSVG from "../../assets/loginSVG";
import { useState } from "react";
import ReturnButton from "../../components/ReturnButton";

const Login = () => {
  const [width, setWidth] = useState(window.innerWidth);
  window.onresize = () => {
    setWidth(window.innerWidth);
  };
  return (
    <Box sx={style}>
      <ReturnButton />
      <Box className="contentContainer">
        {width > 768 && (
          <Box className="loginSVG">
            <LoginSVG />
          </Box>
        )}
        <Box className="loginForm">
          <ComponentLogin />
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
