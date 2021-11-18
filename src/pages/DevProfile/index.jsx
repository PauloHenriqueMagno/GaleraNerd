import { useParams} from "react-router-dom";
import { Box, Text, Flex, Avatar, Heading, Button } from "@chakra-ui/react";
import Header from "../../components/Header"
import StarAverage from "../../components/StarAverage";
import CommentCard from "../../components/CommentCard";
import { useDev } from "../../providers/Dev";
import { useUser } from "../../providers/User";
import { useFeedbacks } from "../../providers/Feedbacks";
import NewProjectModal from "../../components/NewProjectModal"

const DevProfile = () => {
  const { id } = useParams();
  const { devList} = useDev();
  const { usersList } = useUser();
  const { feedbackList } = useFeedbacks();
  const [dev] = devList.filter((item) =>        item.id === Number(id))
  const [user] = usersList.filter((item) => item.id === dev.userId)
  const [feedback] = feedbackList.filter((item) => item.devId === Number(id))
  console.log(feedback)

  return (
    <Box
      minH="100vh"
      w="100vw"
      maxW="1280px"
      position="relative"
      m="auto"
    >
      <Header /> 
      <Flex>
        <Box w="100vw">
          <Box p="8" bg="purple.2">
            <Flex align="center" mb="4">
              <Avatar name={user.name} size="xl" mr="4"/>
              <Heading as="h2" color="white" size="lg">{user.name}</Heading>
            </Flex>
            <StarAverage rate="1" />
          </Box>
          <Box px="4" maxW={{mobile: "100%", desktop: "60%"}}>
            <Text my="4">
             {dev.bio} 
            </Text>
            <Box
              w={{mobile: "100%", desktop: "38%"}}
              border="2px solid"
              borderColor="purple.2" 
              mb="4" p="4" bg="grey.3" 
              top="100px" right="2%" 
              position={{mobile: "static", desktop: "absolute"}}
            >
              <Heading size="20px" mt="2">
                Informações interessantes:
              </Heading>
              <Text mt="4" size="16px">Email:</Text>
              <Text size="14px" color="purple.1">{dev.contacts.email}</Text>
              <Text mt="4" size="16px">Linkdin:</Text>
              <Text size="14px" color="purple.1">{dev.contacts.linkedin}</Text>
              <Text mt="4" size="16px">GitHub:</Text>
              <Text size="14px" color="purple.1">{dev.contacts.gitHub}</Text>
              <Text mt="4" size="16px">Preço por hora:</Text>
              <Text size="14px" color="purple.1">{dev.hourValue}</Text>
              <Text mt="4" size="16px">Tecnologias:</Text>
              <Text size="14px" color="purple.1">{dev.services[0]}</Text>
              <Text mt="4" size="16px">Avaliação:</Text>
              <Flex justify="space-around">
                <Box>
                  <Text mb="2" size="14px" color="purple.1">Média de preço:</Text>
                  <StarAverage rate="3" />
                </Box>
                <Box>
                  <Text mb="2" size="14px" color="purple.1">Atendimento:</Text>
                  <StarAverage rate="3" />
                </Box>
                <Box>
                  <Text mb="2" size="14px" color="purple.1">Recomendação:</Text>
                  <StarAverage rate="3" />
                </Box>
              </Flex>
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
                userRate={feedback.recommendation[0].attendence}
                userName={user.name}
                userComment={feedback.comment[0].comment}
              /> 
              <CommentCard 
                my="10"
                userRate={feedback.recommendation[1].recommendation}
                userName={user.name} 
                userComment={feedback.comment[1].comment}
              />
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default DevProfile;
