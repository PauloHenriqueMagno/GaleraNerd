import api from "../../services";
import { createContext, useContext, useState } from "react";
import { useToast } from "@chakra-ui/toast";

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const toast = useToast();
  const [token] = useState(
    JSON.parse(localStorage.getItem("galeranerd/token")) || ""
  );

  const [feedbackList, setFeedbackList] = useState([]);

  const getFeedbacks = () => {
    api.get("feedbacks").then((res) => setFeedbackList(res.data));
  };

  const createFeedback = (data) => {
    api
      .post("feedbacks", data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("galeranerd/token")
          )}`,
        },
      })
      .then()
      .catch((err) => {
        toast({
          position: "top-left",
          title: "Ops! Não foi possível criar",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };

  const editFeedback = (data) => {
    api
      .patch(`feedbacks/${data.id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        toast({
          position: "top-left",
          title: "Editado com sucesso",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      })
      .catch((err) => {
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
