import { chakra, keyframes, Menu } from "@chakra-ui/react";

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

export const UserIconStyle = (logged = true) => {
  return {
    display: "none",

    "@media (min-width: 769px)": {
      display: logged ? "flex" : "none",
    },
  };
};

export const Header = chakra("header", {
  baseStyle: {
    width: "100%",
    height: "60px",
    borderBottom: "1px solid",
    borderBottomColor: "grey.3",
    background: "white",
    display: "flex",
    flexDirection: "row",
    position: "sticky",
    top: "0",
    zIndex: "100",
  },
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

export const HeaderLogo = chakra("header", {
  baseStyle: {
    width: "100px",
  },
});
export const MenuUser = chakra("button", {
  baseStyle: {
    cursor: "pointer",

    svg: {
      fontsize: "13px",
    },

    "@media (min-width: 769px)": {
      display: "none",
    },
  },
});

export const UserMenuNav = chakra("nav", {
  baseStyle: {
    background: "white",
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
      color: "grey.2",
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
        color: "black.1",
      },
    },
  },
});

export const Button = ({
  children,
  device = "all",
  logged = true,
  color = "grey.1",
  click,
}) => {
  const display = (type) => {
    const mod = device === type ? "flex" : device === "all" ? "flex" : "none";
    const isLogged = logged ? "flex" : "none";

    if (mod === "flex" && isLogged === "flex") {
      return "flex";
    } else {
      return "none";
    }
  };

  const Element = chakra("button", {
    baseStyle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      fontFamily: "Inter",
      fontWeight: "600",
      textAlign: "center",
      fontStyle: "normal",
      color: color,
      borderRadius: "8px",

      _hover: {
        filter: "brightness(50%)",
      },

      p: {
        fontWeight: "600",
        fontSize: "20px",
        color: "grey.1",
      },

      "@media (max-width: 768px)": {
        display: display("mobile"),
        border: `1px solid purple.2`,
        padding: "15px",
        fontSize: "20px",
        width: "90%",
      },
      "@media (min-width: 769px)": {
        display: display("desktop"),
        padding: "5px",
        fontSize: "12px",
        width: "max-content",
      },
    },
  });

  return <Element onClick={click}>{children}</Element>;
};

export const UserMenu = chakra(Menu, {
  display: "none",

  "@media (min-width: 769px)": {
    display: "block",
  },
});

export const UserMenuIcon = ({ children, variant }) => {
  const Element = chakra("div", {
    baseStyle: {
      padding: "9px",
      margin: "0 10px 0 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: variant === "error" ? "error" : "purple.2",
      borderRadius: "7px",

      svg: {
        fontSize: "25px",
      },
    },
  });

  return <Element>{children}</Element>;
};

export const LogoImage = chakra("img", {
  baseStyle: {
    height: "60px",
    cursor: "pointer",
  },
});
