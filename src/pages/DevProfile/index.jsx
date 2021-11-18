import { Box, Text, Flex, Avatar, Heading, Button } from "@chakra-ui/react";
import Header from "../../components/Header"
import StarAverage from "../../components/StarAverage";
import CommentCard from "../../components/CommentCard"

const DevProfile = () => {
  return (
    <Box
      minH="100vh"
      maxW="1280px"
      position="relative"
      m="auto"
    >
      <Header /> 
      <Flex>
        <Box>
          <Box p="8" bg="purple.2">
            <Flex align="center" mb="4">
              <Avatar name="Matheus" size="xl" mr="4"/>
              <Heading as="h2" color="white" size="lg">Matheus</Heading>
            </Flex>
            <StarAverage rate="3" />
          </Box>
          <Box px="4" maxW={{mobile: "100%", desktop: "60%"}}>
            <Text my="4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
            <Box
              minW="35%"
              border="2px solid"
              borderColor="purple.2" 
              mb="4" p="4" bg="grey.3" 
              top="100px" right="5%" 
              position={{mobile: "static", desktop: "absolute"}}
            >
              <Heading size="20px" mt="2">
                Informações interessantes:
              </Heading>
              <Text mt="4" size="16px">Email:</Text>
              <Text mt="4" size="16px">Linkdin:</Text>
              <Text mt="4" size="16px">GitHub:</Text>
              <Text mt="4" size="16px">Preço por hora:</Text>
              <Text mt="4" size="16px">Tecnologias:</Text>
              <Text mt="4" size="16px">Avaliação:</Text>
              <Button
                m="10px auto"
                display="block"
                w="250px"
                bg="purple.2" color="white"
                _hover={{ backgroundColor: "purple.4" }}
              >
                Pedir um orçamento
              </Button>

            </Box>
            <Box>
              <CommentCard 
                userRate="3"
                userName="matheus" 
                userComment="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
              /> 
              <CommentCard 
                my="10"
                userRate="4"
                userName="matheus" 
                userComment="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
              />
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default DevProfile;
