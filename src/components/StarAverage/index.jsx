import { chakra } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";

const StarAverage = ({ rate, id }) => {
  let stars = [0, 0, 0, 0, 0];

  for (let i = 0; i < 5; i++) {
    stars[i] = rate - i;
  }

  const Star = (value, index) => {
    return (
      <svg height="20px" width="20px">
        <linearGradient
          id={`grad${index}${id}`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop
            offset={`${100 * value}%`}
            style={{ "stop-color": "#FED253", "stop-opacity": "1" }}
          />
          <stop
            offset={`${100 * -(1 - value)}%`}
            style={{ "stop-color": "grey", "stop-opacity": "1" }}
          />
        </linearGradient>
        <AiFillStar fill={`url(#grad${index}${id})`} size="20px" />
      </svg>
    );
  };

  const Stars = chakra("div", {
    baseStyle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "125px",
      marginRight: "10px",
    },
  });

  return <Stars>{stars.map(Star)}</Stars>;
};

export default StarAverage;
