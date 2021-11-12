import {
    chakra,
    keyframes,
    Menu
} from "@chakra-ui/react"
import theme from "../../Styles";

const close = keyframes`
    0% {
        transform: translateX(0%);
        visibility: visible;
    }
    100% {
        transform: translateX(-100%);
        visibility: hidden;
    }
`;
const open = keyframes`
    0% {
        transform: translateX(-100%);
        visibility: hidden;
    }
    100% {
        transform: translateX(0%);
        visibility: visible;
    }
`;

export const ThemeHeader = {
    colors: {
        blue: {
            color: theme.colors.purple[2],

            _hover: {
                color: "#7e61ff",
            },
        },
    },
    components: {
        button: {
            display: {
                true: {
                    display: "none",
                },
                false: {
                    display: "block",
                },
            },
        },
        display: {
            desktop: {
                false: {
                    display: "none"
                },
                true: {
                    display: "none",

                    "@media (min-width: 769px)": {
                        display: "block"
                    },
                },
            },
            mobile: {
                false: {
                    display: "none"
                },
                true: {
                    display: "block",
                    
                    "@media (min-width: 769px)": {
                        display: "none",
                    },
                },
            }
        },
        nav: {
            close: {
                "@media (max-width: 768px)": {
                    display: "flex",
                    animation: `${close} 300ms linear`,
                    transform: "translateX(-100%)",
                    visibility: "hidden",
                },
            },
            open: {
                "@media (max-width: 768px)": {
                    display: "flex",
                    animation: `${open} 300ms linear`,
                    visibility: "visible",
                },
            },
        },
    },
};

export const Header = chakra("header", {
    baseStyle: {
        width: "100vw",
        height: "60px",
        borderBottom: `1px solid ${theme.colors.grey[3]}`,
        display: "flex",
        flexDirection: "row",
        position: "sticky",
        top: "0",
        zIndex: "100",
    }
});

export const HeaderContainer = chakra("div", {
    baseStyle: {
        width: "100%",
        height: "100%",
        maxWidth: "1280px",
        margin: "0 auto",
        display: "flex",
        padding: "0 25px",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
});

export const HeaderLogo = chakra("header",{
    baseStyle: {
        width: "100px",
    },
});
export const MenuUser = chakra("button", {
    baseStyle: {
        cursor: "pointer",

        svg: {
            fontsize: "10px",
        },

        "@media (min-width: 769px)": {
            display: "none",
        },
    },
});

export const UserMenuNav = chakra("nav", {
    baseStyle: {
        background: "#FFFFFF",
        display: "none",
        alignItems: "center",
        flexDirection: "column",
        position: "fixed",
        top: "60px",
        left: "0",
        width: "100%",
        height: "calc(100vh - 70px)",
        padding: "20px 25px",
        overflowY: "scroll",
        gap: "20px",
        
        svg: {
            fontSize: "28px",
        },
        
        span: {
            color: theme.colors.grey[2],
            fontSize: "12px",
        },
        
        "@media (min-width: 769px)": {
            display: "flex",
            flexDirection: "row",
            position: "static",
            height: "auto",
            width: "max-content",
            padding: "0",
            overflow: "hidden",
            gap: "15px",
            
            p: {
                fontWeight: 700,
                fontSize: "18px",
                color: theme.colors.black[1],
            },
        },
    },
    
});

export const Button = chakra("button", {
    baseStyle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontFamily: "Inter",
        fontWeight: "600",
        textAlign: "center",
        fontStyle: "normal",
        color: theme.colors.grey[1],
        borderRadius: "8px",
        
        _hover: {
            color: theme.colors.black[2],
        },

        p: {
            fontWeight: "600",
            fontSize: "20px",
            color: theme.colors.grey[1],
        },

        "@media (max-width: 768px)": {
            display: "flex",
            border: `1px solid ${theme.colors.purple[2]}`,
            padding: "15px",
            fontSize: "20px",
            width: "90%",
        },
        "@media (min-width: 769px)": {
            padding: "5px",
            fontSize: "14px",
            width: "max-content",
        },
    },
});

export const UserMenu = chakra(Menu, {
    display: "none",
    
    "@media (min-width: 769px)": {
        display: "block",
    },
});

export const UserMenuIcon = ({children, variant}) => {
    const Element = chakra("div",{
        baseStyle: {
            padding: "9px",
            margin: "0 10px 0 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: (variant==="error" ? theme.colors.error : theme.colors.purple[2]),
            borderRadius: "7px",

            svg: {
                fontSize: "25px",
            },
        },
    });

    return <Element>{children}</Element>
};

export const LogoImage = chakra("img", {
    baseStyle: {
        height: "60px",
        cursor: "pointer",
    },
});