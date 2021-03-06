import { useParams } from "react-router-dom";
import { Box, Text, Flex, Avatar, Heading, Button } from "@chakra-ui/react";
import Header from "../../components/Header";
import StarAverage from "../../components/StarAverage";
import CommentCard from "../../components/CommentCard";
import { useDev } from "../../providers/Dev";
import { useUser } from "../../providers/User";
import { useFeedbacks } from "../../providers/Feedbacks";
import NewProjectModal from "../../components/NewProjectModal";
import { DevCardTag, DevCardTags } from "../../components/DevCard/styled.jsx";
import { useDisclosure } from "@chakra-ui/hooks";

const DevProfile = () => {
  const { id } = useParams();
  const { devList } = useDev();
  const { usersList } = useUser();
  const { feedbackList } = useFeedbacks();
  const [dev] = devList.filter((item) => item.id === Number(id));
  const [user] = usersList.filter((item) => item.id === dev.userId);
  const [feedback] = feedbackList.filter((item) => item.devId === dev.userId);
  const comment = feedback.comment;
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box minH="100vh" w="100vw" maxW="1280px" position="relative" m="auto">
      <NewProjectModal isOpen={isOpen} onClose={onClose} devId={dev.userId} />
      <Header />
      <Flex>
        <Box w="100vw">
          <Box p="8" bg="purple.2">
            <Flex align="center" mb="4">
              <Avatar name={user.name} size="xl" mr="4" />
            </Flex>
            <Heading as="h2" color="white" size="lg">
              {user.name}
            </Heading>
            <StarAverage
              rate={
                feedback.recommendation.reduce(
                  (previous, current) => previous + current.recommendation,
                  0
                ) / feedback.recommendation.length
              }
              id="z"
            />
          </Box>
          <Box px="4" maxW={{ mobile: "100%", desktop: "60%" }}>
            <Text my="4" color="black.2">
              {dev.bio}
            </Text>
            <Box
              w={{ mobile: "100%", desktop: "38%" }}
              border="2px solid"
              borderColor="purple.2"
              mb="4"
              p="4"
              bg="grey.3"
              top="100px"
              right="2%"
              position={{ mobile: "static", desktop: "absolute" }}
            >
              <Heading size="20px" mt="2">
                Informa????es interessantes:
              </Heading>
              <Text mt="4" size="16px">
                Email:
              </Text>
              <Text size="14px" color="purple.1">
                {dev.contacts.email}
              </Text>
              <Text mt="4" size="16px">
                Linkdin:
              </Text>
              <Text size="14px" color="purple.1">
                {dev.contacts.linkedin}
              </Text>
              <Text mt="4" size="16px">
                GitHub:
              </Text>
              <Text size="14px" color="purple.1">
                {dev.contacts.gitHub}
              </Text>
              <Text mt="4" size="16px">
                Pre??o por hora:
              </Text>
              <Text size="14px" color="purple.1" fontWeight="bold">
                {dev.hourValue} /h
              </Text>
              <Text mt="4" size="16px">
                Tecnologias:
              </Text>
              <DevCardTags>{dev.services.map(DevCardTag)}</DevCardTags>
              <Text mt="4" size="16px">
                Avalia????o:
              </Text>
              <Flex
                justify="space-around"
                flexWrap="wrap"
                direction={{ mobile: "column", desktop: "row" }}
              >
                <Box>
                  <Text mb="2" size="14px" color="purple.1">
                    M??dia de pre??o:
                  </Text>
                  <StarAverage
                    rate={
                      feedback.price.reduce(
                        (previous, current) => previous + current.price,
                        0
                      ) / feedback.price.length
                    }
                    id="a"
                  />
                </Box>
                <Box>
                  <Text mb="2" size="14px" color="purple.1">
                    Atendimento:
                  </Text>
                  <StarAverage
                    rate={
                      feedback.attendance.reduce(
                        (previous, current) => previous + current.attendance,
                        0
                      ) / feedback.attendance.length
                    }
                    id="b"
                  />
                </Box>
                <Box>
                  <Text mb="2" size="14px" color="purple.1">
                    Recomenda????o:
                  </Text>
                  <StarAverage
                    rate={
                      feedback.recommendation.reduce(
                        (previous, current) =>
                          previous + current.recommendation,
                        0
                      ) / feedback.recommendation.length
                    }
                    id="c"
                  />
                </Box>
              </Flex>
              <Button
                m="10px auto"
                display="block"
                w="250px"
                bg="purple.2"
                color="white"
                _hover={{ backgroundColor: "purple.4" }}
                onClick={onOpen}
              >
                Pedir um or??amento
              </Button>
            </Box>
            {comment.length === 0 ? (
              <Heading
                fontSize="20px"
                align={{ mobile: "center", desktop: "center" }}
                color="purple.2"
              >
                Este dev ainda n??o possui nenhum feedback.
              </Heading>
            ) : (
              <Box>
                {comment.map((item, i) => (
                  <CommentCard
                    my="2"
                    key={i}
                    id={i}
                    userRate={item.recommend}
                    userName={item.userName}
                    userComment={item.comment}
                  />
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default DevProfile;
