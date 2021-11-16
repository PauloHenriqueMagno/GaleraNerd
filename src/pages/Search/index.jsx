import HeaderComponent from "../../components/Header";
import CategoryCardList from "../../components/CategoryCardList";
import { Box } from "@chakra-ui/react";

const Search = () => {
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
