import api from "../../services";
import { createContext, useState } from "react";

export const DevContext = createContext();

export const DevProvider = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("galeranerd/token")) || ""
  );
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("galeranerd/user")) || {}
  );

  const editProfile = (data) => {
    api
      .patch(`dev/${data.userId}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const devRegister = (data) => {
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
  return (
    <DevContext.Provider value={{ editProfile }}>
      {children}
    </DevContext.Provider>
  );
};
