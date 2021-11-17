import api from "../../services";
import { createContext, useContext, useState } from "react";
import { useToast } from "@chakra-ui/toast";

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const toast = useToast();
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("galeranerd/token")) || ""
  );
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("galeranerd/user")) || {}
  );
  const [devId, setDevId] = useState(0);
  const [feedbackList, setFeedbackList] = useState([]);

  const getDevId = () => {
    api
      .get(`dev?userId=${userInfo.id}`)
      .then((res) => setDevId(res.data.id))
      .catch((err) => console.log(err));
  };
  const getFeedbacks = () => {
    api
      .get("feedbacks")
      .then((res) => setFeedbackList(res.data))
      .catch((err) => console.log(err));
  };

  const createFeedback = (data) => {
    api
      .post("feedbacks", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then()
      .catch();
  };

  const editFeedback = (data) => {
    api
      .patch(`feedbacks/${data.id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res);
        toast({
          position: "top-left",
          title: "Editado com sucesso",
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

  return (
    <FeedbackContext.Provider
      value={{ feedbackList, getFeedbacks, createFeedback, editFeedback }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedbacks = () => useContext(FeedbackContext);
