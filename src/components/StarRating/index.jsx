import { FaStar } from "react-icons/fa";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";

const StarRating = ({
  register = () => {},
  name,
  disabled = false,
  defaultValue = 0,
  errorMessage,
  ...rest
}) => {
  const [rating, setRating] = useState(defaultValue);
  const [hover, setHover] = useState(null);

  const handleRating = (value) => {
    if (!disabled) {
      setRating(value);
    }
  };

  return (
    <Flex direction="column">
      <Flex w="100%" justifyContent="space-between">
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;

          return (
            <label key={ratingValue}>
              <input
                type="radio"
                value={ratingValue}
                name={name}
                {...register(name)}
                style={{ display: "none" }}
                onClick={() => handleRating(ratingValue)}
              />
              <Icon
                as={FaStar}
                color={ratingValue <= (rating || hover) ? "yellow" : "grey.5"}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
                cursor={!disabled && "pointer"}
                {...rest}
              />
            </label>
          );
        })}
      </Flex>
      <Text fontSize="12px" color="error">
        {errorMessage}
      </Text>
    </Flex>
  );
};

export default StarRating;
