import { Box, Heading, Text, Button } from "@chakra-ui/react";
import backgrond from "../../assets/wallpaper.png";

const Home = () => {
  return (
    <Box>
      <Box
        backgroundImage={backgrond}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        color="white"
        p="50px 20px"
      >
        <Heading mb="4">
          GALERA NERD
        </Heading>
        <Text fontSize="16px" >
          rem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500since
        </Text>
        <Button 
          mt="4" 
          p="6"
          w="150px"
          bg="purple.2" color="white" 
          _hover={{backgroundColor: "purple.4"}}
        >
          Saiba Mais
        </Button>
      </Box>
    </Box>
  )
}

export default Home;
