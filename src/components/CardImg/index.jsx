import { Box, Imagen } from "@chakra-ui/react";

const CardImg = ({ children }) => {
  return (
    <Box p="6" w="fit-content" bg="purple.6" borderRadius="lg" mb="8">
      {children}
    </Box>
  )
}

export default CardImg;
