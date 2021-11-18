import {
  DevCardLi,
  DevCardHeader,
  DevCardHeaderDiv,
  DevCardBody,
  DevCardTags,
  DevCardTag,
  DevCardHeaderDevIcon,
} from "./styled";
import { Text } from "@chakra-ui/react";
import AuthDialog from "../AuthDialog";
import { useHistory } from "react-router";
import StarAverage from "../StarAverage";
import { Avatar } from "@chakra-ui/react";
import { useState } from "react";

const DevCard = ({ dev }) => {
  const history = useHistory();
  const [showDialogue, setShowDialogue] = useState(false);

  const { name, bio, services, price, recomend, id } = dev;

  // const rate = (
  //   recomend.reduce((total, atual) => {
  //     return { rating: total.rating + atual.rating };
  //   }).rating / recomend.length
  // ).toFixed(1);

  const handleNavigate = () => {
    let token = localStorage.getItem("galeranerd/token");

    if (!!token) {
      history.push(`/dev-profile/${id}`);
    } else {
      setShowDialogue(true);
    }
  };

  const authRedirect = (resp) => {
    if (resp === "login") {
      history.push(`/login${id}`);
    } else if (resp === "register") {
      history.push("/register");
    }
    setShowDialogue(false);
  };

  return (
    <DevCardLi key={id} onClick={handleNavigate}>
      <AuthDialog
        isOpen={showDialogue}
        onClose={authRedirect}
        message="É necessário uma conta para continuar, faça login ou crie uma conta"
        title="Atenção"
      />
      <DevCardHeader>
        <DevCardHeaderDevIcon>
          <Avatar />
        </DevCardHeaderDevIcon>
        <DevCardHeaderDiv>
          <div>
            <h3>{name}</h3>
            <DevCardHeaderDiv width="min-content">
              <StarAverage rate={recomend} id={id} />
              <span>{recomend.toFixed(1)}</span>
            </DevCardHeaderDiv>
          </div>
          <p>{price}/h</p>
        </DevCardHeaderDiv>
      </DevCardHeader>
      <DevCardBody>
        <p>{bio}</p>
        {!!services && <DevCardTags>{services.map(DevCardTag)}</DevCardTags>}
      </DevCardBody>
    </DevCardLi>
  );
};

export default DevCard;
