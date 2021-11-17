import api from "../../services";
import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { useToast, Box } from "@chakra-ui/react";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const history = useHistory();
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("galeranerd/token")) || ""
  );
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("galeranerd/user")) || {}
  );
  const toast = useToast();

  const [usersList, setUserslist] = useState([]);

  const getUsersList = () => {
    api
      .get("users")
      .then((response) => setUserslist(response.data))
      .catch((err) => console.log(err));
  };

  const login = (data) => {
    api
      .post("signin", data)
      .then((res) => {
        localStorage.setItem(
          "galeranerd/token",
          JSON.stringify(res.data.accessToken)
        );
        toast({
          position: "top-left",
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 4000,
          isClosable: true,
          render: () => (
            <Box color="white" p={3} bg="blue.500">
              Hello World
            </Box>
          ),
        });
        setToken(res.data.accessToken);
        console.log(res);
        localStorage.setItem("galeranerd/user", JSON.stringify(res.data.user));
        setUserInfo(res.data.user);
        res.data.user.dev ? history.push("/dev") : history.push("/user");
      })
      .catch((err) => console.log(err));
  };

  const register = (data) => {
    api
      .post("signup", data)
      .then((res) => {
        console.log(res);
        setToken(res.data.accessToken);
        setUserInfo(res.data.user);
        localStorage.setItem(
          "galeranerd/token",
          JSON.stringify(res.data.accessToken)
        );
        localStorage.setItem("galeranerd/user", JSON.stringify(res.data.user));
      })
      .catch((err) => console.log(err));
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
