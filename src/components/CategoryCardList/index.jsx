import { Flex } from "@chakra-ui/react";
import { categoryList } from "./CategoryData";
import CategoryCard from "../CategoryCard";
import { useHistory } from "react-router-dom";

const CategoryCardList = () => {
  const history = useHistory();

  const selectCategory = (category) => {
    history.push(`/devsList/${category}`);
  };

  return (
    <Flex
      w="100%"
      margin="0 auto"
      justifyContent="space-around"
      flexWrap="wrap"
    >
      {categoryList.map((cardOnList) => (
        <CategoryCard
          key={cardOnList.id}
          category={cardOnList}
          action={() => selectCategory(cardOnList.title)}
        />
      ))}
    </Flex>
  );
};

export default CategoryCardList;
