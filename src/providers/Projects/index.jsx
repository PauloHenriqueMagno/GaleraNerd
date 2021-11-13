import api from "../../services";
import { createContext, useContext, useState } from "react";

export const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
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
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const createProject = async (data) => {
    await api
      .post("projects", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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
