import { Grid } from "@chakra-ui/react";
import { categoryList } from "./CategoryData";
import CategoryCard from "../CategoryCard";
import { useHistory } from "react-router-dom";

const CategoryCardList = () => {
  const history = useHistory();

  const selectCategory = (category) => {
    history.push(`/devsList/${category}`);
  };

  return (
    <Grid
      templateColumns={{ mobile: "repeat(1, 1fr)", desktop: "repeat(3, 1fr)" }}
      rowGap="50px"
      columnGap="30px"
      w="100%"
      margin="0 auto"
      justifyItems="center"
    >
      {categoryList.map((cardOnList) => (
        <CategoryCard
          key={cardOnList.id}
          category={cardOnList}
          action={() => selectCategory(cardOnList.title)}
        />
      ))}
    </Grid>
  );
};

export default CategoryCardList;
