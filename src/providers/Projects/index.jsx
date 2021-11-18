import api from "../../services";
import { createContext, useContext, useState } from "react";
import { useToast } from "@chakra-ui/toast";

export const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const toast = useToast();

  const [projectList, setProjectList] = useState([]);

  const getProjects = () => {
    api
      .get("projects", {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("galeranerd/token")
          )}`,
        },
      })
      .then((res) => setProjectList(res.data));
  };

  const editProject = (data) => {
    api
      .patch(`projects/${data.id}`, data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("galeranerd/token")
          )}`,
        },
      })
      .then((res) => {
        getProjects();
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

  const createProject = (data) => {
    api
      .post("projects", data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("galeranerd/token")
          )}`,
        },
      })
      .then((res) => {
        getProjects();
        toast({
          position: "top-left",
          title: "Criado com sucesso",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      })
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

  return (
    <ProjectsContext.Provider
      value={{ projectList, getProjects, editProject, createProject }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectsContext);
