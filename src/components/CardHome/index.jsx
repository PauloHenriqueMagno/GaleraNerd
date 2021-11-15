import { Box } from "@chakra-ui/react";
 
const CardHome = ({children, ...res}) => {
  return (
    <Box maxWidth="400px" border="2px solid gray" mt="30" p="7" _hover={{borderColor:"purple.2"}} >
      {children}
    </Box>
  )
}

export default CardHome; 
