import { Box, Imagen } from "@chakra-ui/react";

const CardImg = ({ children }) => {
  return (
    <Box p="4" bg="purple.5" w="130px" mb="8">
      {children}
    </Box>
  )
}

export default CardImg;
