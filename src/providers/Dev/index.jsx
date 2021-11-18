import api from "../../services";
import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router";
import { useToast } from "@chakra-ui/toast";
import { useFeedbacks } from "../Feedbacks";

export const DevContext = createContext();

export const DevProvider = ({ children }) => {
  const { createFeedback } = useFeedbacks();
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
      .then((res) => {
        console.log(res);
        toast({
          position: "top-left",
          title: "Perfil editado com sucesso!",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err);
        toast({
          position: "top-left",
          title: "Ops! Não foi possível editar",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };

  const devRegister = (data) => {
    api
      .post("dev", data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("galeranerd/token")
          )}`,
        },
      })
      .then((res) => {
        createFeedback({
          devId: res.data.userId,
          attendance: [],
          price: [],
          recommendation: [],
          comment: [],
        });

        toast({
          position: "top-left",
          title: "Cadastrado com sucesso",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err);
        toast({
          position: "top-left",
          title: "Ops! Houve algum problema no seu cadastro",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };

  return (
    <DevContext.Provider
      value={{ editProfile, devRegister, getDevList, devList }}
    >
      {children}
    </DevContext.Provider>
  );
};

export const useDev = () => useContext(DevContext);
