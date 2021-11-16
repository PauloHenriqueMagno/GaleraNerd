import api from "../../services";
import { createContext, useState } from "react";
import { useHistory } from "react-router";
import { useToast } from "@chakra-ui/toast";

export const DevContext = createContext();

export const DevProvider = ({ children }) => {
  const toast = useToast();

  const history = useHistory();

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
    console.log(data);

    api
      .post("dev", data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("galeranerd/token")
          )}`,
        },
      })
      .then((res) => {
        console.log("api response:", res);
        history.push("dev");
        toast({
          position: "top-left",
          title: "Registrado com sucesso",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
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
