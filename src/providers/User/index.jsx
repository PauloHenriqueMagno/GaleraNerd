import api from "../../services";
import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const history = useHistory();
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("galeranerd/token")) || ""
  );
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("galeranerd/user")) || {}
  );

  const login = (data) => {
    api
      .post("signin", data)
      .then((res) => {
        localStorage.setItem(
          "galeranerd/token",
          JSON.stringify(res.data.accessToken)
        );
        setToken(res.data.accessToken);
        console.log(res);
        localStorage.setItem("galeranerd/user", JSON.stringify(res.data.user));
        setUserInfo(res.data.user);
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
    setToken("")
    setUserInfo({})
  };
  return (
    <UserContext.Provider value={{ login, register, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
