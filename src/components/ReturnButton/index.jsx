import { IconButton } from "@chakra-ui/button";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useHistory } from "react-router";

const ReturnButton = ({ ...rest }) => {
  const history = useHistory();
  return (
    <IconButton
      {...rest}
      bgColor="purple.2"
      className="arrowBackIcon"
      width="60px"
      height="45px"
      position="absolute"
      onClick={() => history.goBack()}
    >
      <ArrowBackIcon
        sx={{
          fontSize: "27px",
        }}
      />
    </IconButton>
  );
};

export default ReturnButton;
