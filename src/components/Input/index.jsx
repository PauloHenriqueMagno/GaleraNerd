import { Input } from "@chakra-ui/react";

const ComponentInput = ({registerName, register, ...rest }) => {
  return <Input {...rest} />;
};

export default ComponentInput;
