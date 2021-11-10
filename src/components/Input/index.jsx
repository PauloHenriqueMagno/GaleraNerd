import { Input } from "@chakra-ui/react";

const ComponentInput = ({registerName, register, ...rest }) => {
  return <Input {...rest} {...register(registerName)}/>;
};

export default ComponentInput;
