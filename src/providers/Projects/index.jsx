import api from "../../services";
import { createContext, useContext, useState } from "react";
import { useToast } from "@chakra-ui/toast";

export const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const toast = useToast();
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("galeranerd/token")) || ""
  );

  //   const [userInfo, setUserInfo] = useState(
  //     JSON.parse(localStorage.getItem("galeranerd/user")) || {}
  //   );

  const [projectList, setProjectList] = useState([]);

  const getProjects = () => {
    api
      .get("projects")
      .then((res) => setProjectList(res.data))
      .catch((err) => console.log(err));
  };

  const editProject = (data) => {
    api
      .patch(`projects/${data.id}`, data, {
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

  const createProject = async (data) => {
    await api
      .post("projects", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res);
        toast({
          position: "top-left",
          title: "Criado com sucesso",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err);
        toast({
          position: "top-left",
          title: "Ops! Não foi possível criar",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };

  return (
    <ProjectsContext.Provider
      value={{ projectList, getProjects, editProject, createProject }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectsContext);
