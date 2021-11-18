import { Flex, Text, Box, Avatar } from "@chakra-ui/react";
import StarAverage from "../StarAverage";

const CommentCard = ({ userComment, userName, userRate, id, ...res }) => {
  return (
    <Flex color="white" bg="purple.2" w="100%" p="43px 34px" {...res}>
      <Box display={{ mobile: "none", desktop: "flex" }} marginRight="35px">
        <Avatar w="55px" h="55px" />
      </Box>

      <Box>
        <Text fontWeight="bold" fontSize="20px" marginBottom="20px">
          {userName}
        </Text>
        <Text marginBottom="15px" fontSize="16px">
          {userComment}
        </Text>
        <StarAverage rate={userRate} id={id} />
      </Box>
    </Flex>
  );
};

export default CommentCard;
