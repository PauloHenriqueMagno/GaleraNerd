import { UserProvider } from "./User";

const Provider = ({ children }) => {
  return (
    <>
      <UserProvider>{children}</UserProvider>
    </>
  );
};

export default Provider;
