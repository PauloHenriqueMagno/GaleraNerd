import {
  DevCardLi,
  DevCardHeader,
  DevCardHeaderDiv,
  DevCardBody,
  DevCardTags,
  DevCardTag,
  DevCardHeaderDevIcon,
} from "./styled";
import UserIcon from "../../assets/UserIconSVG";
import { useHistory } from "react-router";
import StarAverage from "../StarAverage";
import { Avatar } from "@chakra-ui/react";

const DevCard = ({ dev }) => {
  const history = useHistory();

  const { name, bio, services, price, recomend, id } = dev;

  // const rate = (
  //   recomend.reduce((total, atual) => {
  //     return { rating: total.rating + atual.rating };
  //   }).rating / recomend.length
  // ).toFixed(1);

  return (
    <DevCardLi key={id} onClick={() => history.push(`/devs/${id}`)}>
      <DevCardHeader>
        <DevCardHeaderDevIcon>
          <Avatar />
        </DevCardHeaderDevIcon>
        <DevCardHeaderDiv>
          <div>
            <h3>{name}</h3>
            <DevCardHeaderDiv width="min-content">
              <StarAverage rate={recomend.toFixed(1)} />
              <span>{recomend.toFixed(1)}</span>
            </DevCardHeaderDiv>
          </div>
          <p>{price}/h</p>
        </DevCardHeaderDiv>
      </DevCardHeader>
      <DevCardBody>
        <p>{bio}</p>
        <DevCardTags>{services.map(DevCardTag)}</DevCardTags>
      </DevCardBody>
    </DevCardLi>
  );
};

export default DevCard;
