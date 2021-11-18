import HeaderComponent from "../../components/Header";
import { useParams } from "react-router-dom";
import DevCard from "../../components/DevCard";
import {
  Box,
  Text,
  Flex,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDev } from "../../providers/Dev";
import { useUser } from "../../providers/User";
import { useFeedbacks } from "../../providers/Feedbacks";
import { useHistory } from "react-router-dom";

const DevList = () => {
  const history = useHistory();
  const { devList, getDevList } = useDev();
  const { getUsersList, usersList } = useUser();
  const { getFeedbacks, feedbackList } = useFeedbacks();
  const [devs, setDevs] = useState([]);
  const [filteredDevs, setFilteredDevs] = useState([]);
  const [filterValue, setFilterValue] = useState([0, 100]);
  const { category } = useParams();

  const filterDevs = (devList) => {
    return devList.filter((dev) => dev.categories.includes(category));
  };

  const addUserToDevData = (filteredDevs) => {
    return filteredDevs.map((dev) => {
      let data = {};
      usersList.forEach((user) => {
        if (user.id === dev.userId) {
          data = {
            user,
            dev,
          };
        }
      });
      return data;
    });
  };

  const addFeedbacksToDevData = (filteredDevs) => {
    return filteredDevs.map((dev) => {
      let data = dev;
      feedbackList.forEach((feedback) => {
        if (feedback.devId === dev.user.id) {
          data = {
            ...dev,
            feedback,
          };
        }
      });
      return data;
    });
  };

  const formatDevData = (filteredDevs) => {
    console.log(filteredDevs);
    return filteredDevs.map(({ dev, user, feedback }) => {
      let devRecomend = 0;
      console.log(feedback);
      if (feedback.recommendation.length > 0) {
        devRecomend =
          feedback.recommendation.reduce(
            (acc, { recommendation }) => acc + recommendation,
            0
          ) / feedback.recommendation.length;
      }
      let formatedDevData = {
        id: dev.id,
        bio: dev.bio,
        name: user.name,
        recomend: devRecomend,
        price: dev.hourValue,
        services: dev.services,
      };
      return formatedDevData;
    });
  };

  useEffect(() => {
    getDevList();
    getUsersList();
    getFeedbacks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (
      devList.length !== 0 &&
      feedbackList.length !== 0 &&
      usersList.length !== 0
    ) {
      let filteredDevs = filterDevs(devList);
      let devWithUserData = addUserToDevData(filteredDevs);
      let divWithFeedbacksData = addFeedbacksToDevData(devWithUserData);
      let formatedDevData = formatDevData(divWithFeedbacksData);

      setDevs(formatedDevData);
      setFilteredDevs(formatedDevData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [devList, feedbackList, usersList]);

  const handleFilter = (filterValue) => {
    let filtered = devs.filter(
      (dev) => dev.price <= filterValue[1] && dev.price >= filterValue[0]
    );
    setFilteredDevs(filtered);
  };

  return (
    <Box bg="white" minH="100vh">
      <HeaderComponent />

      <Flex
        maxW="1280px"
        margin={{ mobile: "0 auto", desktop: "30px auto" }}
        justifyContent="space-between"
        direction={{ mobile: "column-reverse", desktop: "row" }}
      >
        <Flex
          w={{ mobile: "100%", desktop: "780px" }}
          direction="column"
          minH="80vh"
          marginRight="30px"
        >
          {filteredDevs.length < 1 ? (
            <Box
              w={{ mobile: "90%", desktop: "700px" }}
              margin="0 auto"
              textAlign="center"
            >
              <Text color="black" margin="30px auto">
                Não encontramos nenhum Desenvolvedor nessa categoria, nessa
                faixa de preço, filtre por outros valores ou busque outra
                categoria.
              </Text>
              <Button
                bg="purple.2"
                color="white"
                size="lg"
                _hover={{ bg: "purple.4" }}
                onClick={() => history.push("/search")}
              >
                Buscar outra categoria
              </Button>
            </Box>
          ) : (
            <>
              {filteredDevs.map((dev) => (
                <DevCard key={dev.id} dev={dev} />
              ))}
            </>
          )}
        </Flex>
        <Box
          w={{ mobile: "100%", desktop: "500px" }}
          h={{ mobile: "fit-content", desktop: "215px" }}
          bg="grey.3"
          borderRadius="5px"
        >
          <Flex
            padding="27px 20px"
            bg="purple.2"
            borderRadius="5px"
            display={{ mobile: "none", desktop: "flex" }}
          >
            <Text fontWeight="bold" fontSize="20px" color="white">
              Filtros
            </Text>
          </Flex>
          <Box margin="15px 20px">
            <Text fontSize="16px" color="black.1">
              Preço:
            </Text>
            <RangeSlider
              aria-label={["min", "max"]}
              min={0}
              max={200}
              defaultValue={filterValue}
              onChangeEnd={(val) => handleFilter(val)}
              onChange={(val) => setFilterValue(val)}
              step={10}
              margin="10px 0"
            >
              <RangeSliderTrack bg="white">
                <RangeSliderFilledTrack bg="purple.2" />
              </RangeSliderTrack>
              <RangeSliderThumb boxSize={5} index={0} />
              <RangeSliderThumb boxSize={5} index={1} />
            </RangeSlider>
            <Flex justifyContent="space-between">
              <Text
                color="black.1"
                fontSize="14px"
              >{`R$ ${filterValue[0]},00`}</Text>
              <Text
                color="black.1"
                fontSize="14px"
              >{`R$ ${filterValue[1]},00`}</Text>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default DevList;
