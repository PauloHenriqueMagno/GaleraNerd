import HeaderComponent from "../../components/Header";
import CategoryCardList from "../../components/CategoryCardList";
import { Box } from "@chakra-ui/react";
import { useUser } from "../../providers/User";
import { useDev } from "../../providers/Dev";
import { useFeedbacks } from "../../providers/Feedbacks";
import { useEffect } from "react";

const Search = () => {
  const { getUsersList } = useUser();
  const { getFeedbacks } = useFeedbacks();
  const { getDevList } = useDev();

  useEffect(() => {
    getUsersList();
    getDevList();
    getFeedbacks();
  }, []);
  return (
    <Box bg="white">
      <HeaderComponent />
      <Box maxW="1280px" m="0 auto" boxSizing="border-box">
        <CategoryCardList />
      </Box>
    </Box>
  );
};

export default Search;
