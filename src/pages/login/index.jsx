import { Box } from "@chakra-ui/layout";
import ComponentLogin from "../../components/Login";
import style from "./styles";
import LoginSVG from "../../assets/loginSVG";
import { useState } from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { useHistory } from "react-router";

const Login = () => {
  const history = useHistory();
  const [width, setWidth] = useState(window.innerWidth);
  window.onresize = () => {
    setWidth(window.innerWidth);
  };
  return (
    <Box sx={style}>
      <IconButton className="arrowBackIcon" onClick={() => history.goBack()}>
        <ArrowBackIcon />
      </IconButton>
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
