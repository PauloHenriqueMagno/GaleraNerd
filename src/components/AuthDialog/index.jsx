import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";

const AuthDialog = ({ isOpen, onClose, message, title }) => {
  const cancelRef = useRef();

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={() => onClose("cancel")}
    >
      <AlertDialogOverlay>
        <AlertDialogContent bg="white" color="black.1">
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {title}
          </AlertDialogHeader>

          <AlertDialogBody>{message}</AlertDialogBody>

          <AlertDialogFooter>
            <Button onClick={() => onClose("register")} ml={3}>
              Criar conta
            </Button>
            <Button
              ref={cancelRef}
              onClick={() => onClose("login")}
              color="white"
              bg="purple.2"
              _hover={{ bg: "purple.4" }}
            >
              Fazer login
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default AuthDialog;
