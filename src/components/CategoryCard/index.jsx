import { Flex, Box, Text, Image } from "@chakra-ui/react";

const CategoryCard = ({ category, action }) => {
  const { id, title, description, image } = category;

  return (
    <Flex
      direction="column"
      bg="#FFF"
      w={{ mobile: "377px", desktop: "410px" }}
      p="40px"
      border="3px solid"
      borderColor="black.4"
      cursor="pointer"
      _hover={{ borderColor: "purple.2" }}
      onClick={action}
      key={id}
    >
      <Flex direction="column">
        <Flex
          w="94px"
          h="80px"
          bg="rgba(70, 48, 171, 0.1)"
          borderRadius="5px"
          justifyContent="center"
          alignItems="center"
        >
          <Image src={image} alt={title} boxSize="75%" objectFit="contain" />
        </Flex>
        <Box marginTop="20px">
          <Text color="black.1" fontWeight="bold" fontSize="20px">
            {title}
          </Text>
        </Box>
      </Flex>
      <Box marginTop="14px">
        <Text color="black.2" fontSize="14px">
          {description}
        </Text>
      </Box>
    </Flex>
  );
};

export default CategoryCard;
