import api from "../../services";
import { createContext, useContext, useState } from "react";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("galeranerd/token"));
  const userInfo = JSON.parse(localStorage.getItem("galeranerd/user"));
  const login = (data) => {
    api
      .post("/signin", data)
      .then((res) => {
        console.log(res);
        localStorage.setItem(
          "galeranerd/token",
          JSON.stringify(res.data.accessToken)
        );
        localStorage.setItem("galeranerd/user", JSON.stringify(res.data.user));
      })
      .catch((err) => console.log(err));
  };

  return (
    <UserContext.Provider value={{ login }}>{children}</UserContext.Provider>
  );
};
