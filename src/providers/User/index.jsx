import api from "../../services";
import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useDev } from "../Dev";
import { useProjects } from "../Projects";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const history = useHistory();
  const { getDevList } = useDev();
  const { getProjects } = useProjects();
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("galeranerd/token")) || ""
  );
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("galeranerd/user")) || {}
  );
  const toast = useToast();

  const [usersList, setUserslist] = useState([]);

  const getUsersList = () => {
    api.get("users").then((response) => setUserslist(response.data));
  };

  const login = (data, devId) => {
    api
      .post("signin", data)
      .then((res) => {
        localStorage.setItem(
          "galeranerd/token",
          JSON.stringify(res.data.accessToken)
        );
        toast({
          position: "top-left",
          title: "Login realizado com sucesso!",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        setToken(res.data.accessToken);
        localStorage.setItem("galeranerd/user", JSON.stringify(res.data.user));
        setUserInfo(res.data.user);
        getProjects();
        if (!!res.data.user.dev) {
          history.push("/dev");
          getDevList();
        } else if (devId !== undefined) {
          history.push(`/dev-profile/${devId}`);
        } else {
          history.push("/user");
        }
        // res.data.user.dev ? history.push("/dev") : history.push("/user");
      })
      .catch((err) => {
        toast({
          position: "top-left",
          title: "Ops! Houve algum problema ao realizar o login",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };

  const register = (data) => {
    api
      .post("signup", data)
      .then((res) => {
        toast({
          position: "top-left",
          title: "Sua conta foi criada com sucesso, fa??a login para continuar!",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        history.push("/login");
      })
      .catch((err) => {
        toast({
          position: "top-left",
          title: "Ops! Houve algum problema no seu cadastro",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };

  const logOut = () => {
    localStorage.clear();
    history.push("/");
    setToken("");
    setUserInfo({});
  };
  return (
    <UserContext.Provider
      value={{
        login,
        register,
        logOut,
        userInfo,
        token,
        usersList,
        getUsersList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
