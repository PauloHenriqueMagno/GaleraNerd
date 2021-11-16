import { chakra } from "@chakra-ui/react";
import {
    AiFillStar
} from "react-icons/ai"

export const DevCardLi = chakra("li", {
    baseStyle: {
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "grey.5",
        padding: "25px 5px",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "20px",
        background: "white",

        svg: {
            fontSize: "30px",
        },
    }
});

export const DevCardHeader = chakra("header", {
    baseStyle: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: "2px",
        borderStyle: "solid",
        borderColor: "grey.5",
        padding: "0 15px 15px",
        gap: "10px",
    },
});

export const DevCardHeaderDiv = chakra("div", {
    baseStyle: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        gap: "5px",

        p: {
            color: "purple.2",
            fontWeight: 600
        }
    },
});

export const DevCardHeaderDevIcon = chakra("div", {
    baseStyle: {
        display: "block",
        minWidth: "60px",
        height: "60px",

        svg: {
            width: "100%",
            height: "100%",
        },
    }
})

export const DevCardHeaderStars = ({rate}) => {
    let stars = [0,0,0,0,0];

    for(let i = 0; i < 5; i++){
        stars[i] = rate-i;
    }

    const Star = (value, index) => {
        return (
            <svg height="20px" width="20px">
                <linearGradient id={`grad${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset={`${100*value}%`} style={{"stop-color":"#FED253", "stop-opacity":"1"}} />
                    <stop offset={`${100*-(1-value)}%`} style={{"stop-color":"grey", "stop-opacity":"1"}} />
                </linearGradient>
                <AiFillStar fill={`url(#grad${index})`} size="20px" />
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

    return (
        <Stars>
            {stars.map(Star)}
        </Stars>
    )
};

export const DevCardBody = chakra("body", {
    baseStyle: {
        display: "flex",
        flexDirection: "column",
        fontWeight: 400,
        color: "black.2",
        padding: "15px 5px 0",
        gap: "15px",
    },
});

export const DevCardTags = chakra("ul", {
    baseStyle: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "10px"
    }
});

export const DevCardTag = (text) => {
    const Element = chakra("li", {
        baseStyle: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "max-content",
            alignItems: "center",
            padding: "5px 10px",
            background: "rgba(70, 48, 171, 0.2)",
            color: "purple.2",
            fontWeight: 500,
            fontSize: "15px",
        }
    });

    return <Element>{text}</Element>;
};