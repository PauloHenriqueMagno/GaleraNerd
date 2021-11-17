import { Box } from "@chakra-ui/layout";
import ComponentLogin from "../../components/Login";
import style from "./styles";
import LoginSVG from "../../assets/loginSVG";
import { useState, useEffect } from "react";
import ReturnButton from "../../components/ReturnButton";
import { useHistory } from "react-router-dom";
import { useUser } from "../../providers/User";

const Login = () => {
  const history = useHistory();
  const { userInfo } = useUser();
  const [width, setWidth] = useState(window.innerWidth);
  window.onresize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    if (!!userInfo.id) {
      history.push("/");
    }
  }, [userInfo]);

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
