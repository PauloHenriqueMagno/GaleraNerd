import { UserProvider } from "./User";
import { DevProvider } from "./Dev";
import { FeedbackProvider } from "./Feedbacks";
import { ProjectsProvider } from "./Projects";

const Provider = ({ children }) => {
  return (
    <ProjectsProvider>
      <FeedbackProvider>
        <DevProvider>
          <UserProvider>{children}</UserProvider>
        </DevProvider>
      </FeedbackProvider>
    </ProjectsProvider>
  );
};

export default Provider;
