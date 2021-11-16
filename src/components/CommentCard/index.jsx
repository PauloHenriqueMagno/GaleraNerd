import { Flex, Text, Box, Avatar } from "@chakra-ui/react";
import StarAverage from "../StarAverage";

const CommentCard = ({ userComment, userName, userRate }) => {
  return (
    <Flex
      bg="purple.2"
      w={{ mobile: "90%", desktop: "925px" }}
      p="43px 34px"
      margin={{ mobile: "0 auto", desktop: "0" }}
    >
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
        <StarAverage rate={userRate} />
      </Box>
    </Flex>
  );
};

export default CommentCard;
