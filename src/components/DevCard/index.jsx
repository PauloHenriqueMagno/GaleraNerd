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

const DevCard = (dev) => {
  const history = useHistory();

  const { name, bio, services, price, recomend, id } = dev;

  const rate = (
    recomend.reduce((total, atual) => {
      return { rating: total.rating + atual.rating };
    }).rating / recomend.length
  ).toFixed(1);

  return (
    <DevCardLi key={id} onClick={() => history.push(`/devs/${id}`)}>
      <DevCardHeader>
        <DevCardHeaderDevIcon>
          <UserIcon />
        </DevCardHeaderDevIcon>
        <DevCardHeaderDiv>
          <div>
            <h3>{name}</h3>
            <DevCardHeaderDiv width="min-content">
              <StarAverage rate={rate} />
              <span>{rate}</span>
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
