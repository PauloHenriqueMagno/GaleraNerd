import { Input } from "@chakra-ui/react";
import { InputGroup, InputRightElement } from "@chakra-ui/input";
import { FormLabel } from "@chakra-ui/form-control";
import { InputLeftElement } from "@chakra-ui/input";
import { FormHelperText } from "@chakra-ui/form-control";
import { Box } from "@chakra-ui/layout";
import style from "./styles";

const ComponentInput = ({
  labelMessage,
  placeholderMessage,
  registerName,
  register,
  errorMessage,
  leftIcon,
  rightIcon,
  ...rest
}) => {
  return (
    <InputGroup sx={style}>
      {labelMessage && <FormLabel>{labelMessage}</FormLabel>}
      <Box>
        {leftIcon && <InputLeftElement children={leftIcon} />}
        <Input
          pl={leftIcon? "35px" : "5px"}
          pr={rightIcon? "35px" : "5px"}
          errorBorderColor="error"
          placeholder={placeholderMessage}
          variant="filled"
          {...register(registerName)}
          {...rest}
        />
        {rightIcon && <InputRightElement children={rightIcon} />}
      </Box>
      {errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
    </InputGroup>
  );
};

export default ComponentInput;
