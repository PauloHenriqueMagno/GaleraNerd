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
  const [devList, setDevList] = useState([]);

  const getDevList = () => {
    api
      .get("dev")
      .then((res) => setDevList(res.data))
      .catch((err) => console.log(err));
  };

  const editProfile = (data) => {
    api
      .patch(`dev/${userInfo.id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const devRegister = (data) => {
    api
      .post("dev", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
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
    <DevContext.Provider
      value={{ editProfile, devRegister, getDevList, devList }}
    >
      {children}
    </DevContext.Provider>
  );
};
