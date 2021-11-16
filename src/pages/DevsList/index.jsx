import HeaderComponent from "../../components/Header";
import { useParams } from "react-router-dom";
import DevCard from "../../components/DevCard";
import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDev } from "../../providers/Dev";
import { useUser } from "../../providers/User";
import { useFeedbacks } from "../../providers/Feedbacks";

const DevList = () => {
  const { devList, getDevList } = useDev();
  const { getUsersList, usersList } = useUser();
  const { getFeedbacks, feedbackList } = useFeedbacks();
  const [devs, setDevs] = useState([]);
  const { category } = useParams();

  //   const filteredDevList = devList.filter((dev) =>
  //     dev.categories.includes(category)
  //   );

  const filterDevs = (devList) => {
    return devList.filter((dev) => dev.categories.includes(category));
  };

  const formatDevData = (filteredDevs) => {
    return filteredDevs.map((dev) => {
      let data = {};
      feedbackList.forEach((feedback) => {
        usersList.forEach((user) => {
          if (user.id === dev.userId && dev.userId === feedback.devId) {
            let recommendationAverage =
              feedback.recommendation.reduce(
                (acc, { recommendation }) => acc + recommendation,
                0
              ) / feedback.recommendation.length;

            data = {
              id: dev.userId,
              bio: dev.bio,
              name: user.name,
              recomend: recommendationAverage,
              price: dev.hourValue,
              services: dev.services,
            };
          }
        });
      });
      return data;
    });
  };

  useEffect(() => {
    getDevList();
    getUsersList();
    getFeedbacks();
  }, []);

  useEffect(() => {
    if (
      devList.length !== 0 &&
      feedbackList.length !== 0 &&
      usersList.length !== 0
    ) {
      let filteredDevs = filterDevs(devList);
      let formatedDevData = formatDevData(filteredDevs);
      setDevs(formatedDevData);
    }
  }, [devList, feedbackList, usersList]);

  return (
    <Box bg="white" minH="100vh">
      <HeaderComponent />
      {devs.length < 1 ? (
        <Text color="black">
          Não encontramos nenhum Desenvolvedor nessa categoria
        </Text>
      ) : (
        <>
          {devs.map((dev) => (
            <DevCard key={dev.id} dev={dev} />
          ))}
        </>
      )}
    </Box>
  );
};

export default DevList;
