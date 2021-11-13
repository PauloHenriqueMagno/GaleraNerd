import { Textarea, Text } from "@chakra-ui/react";

const TextAreaInput = ({
  register,
  registerName,
  errorMessage,
  placeholder,
  ...rest
}) => {
  return (
    <>
      <Textarea
        placeholder={placeholder}
        size="lg"
        isInvalid={!!errorMessage}
        {...register(registerName)}
        {...rest}
        errorBorderColor="error"
        focusBorderColor={!!errorMessage ? "error" : "grey.2"}
        bg="grey.4"
        _placeholder={{ color: "grey.2" }}
        rows="7"
      />
      {!!errorMessage && (
        <Text fontSize="12px" color="error" marginTop="12px">
          {errorMessage}
        </Text>
      )}
    </>
  );
};

export default TextAreaInput;
