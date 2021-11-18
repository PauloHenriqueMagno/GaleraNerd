import {
  Header,
  HeaderContainer,
  HeaderLogo,
  LogoImage,
  MenuUser,
  UserMenuNav,
  Button,
  ThemeHeader,
  UserMenu,
  UserMenuIcon,
  UserIconStyle,
} from "./styled";
import { useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/User";
import Logo from "../../assets/logoGN.svg";
import UserIcon from "../../assets/UserIconSVG";
import MenuIcon from "../../assets/MenuSGV";
import ProfileIcon from "../../assets/ProfileIconSVG";
import LogOutIcon from "../../assets/LogoutSVG";
import { MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState("");
  const [connected, setConnected] = useState(false);
  const { userInfo, logOut } = useContext(UserContext);

  const history = useHistory();

  const MenuNav = ThemeHeader.components.nav[isOpen ? "open" : "close"];

  useEffect(() => {
    const validation = !!userInfo.id ? true : false;
    setConnected(validation);
  }, [userInfo]);

  const handleLogout = () => {
    logOut();
  };

  const showProfile = () => {
    if (userInfo.dev) {
      history.push("/dev");
    } else {
      history.push("/user");
    }
  };

  return (
    <Header>
      <HeaderContainer>
        <HeaderLogo onClick={() => history.push("/")}>
          <LogoImage src={Logo} alt="Logo" />
        </HeaderLogo>

        <MenuUser onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon />
        </MenuUser>
        <UserMenuNav sx={isOpen !== "" && MenuNav}>
          <Button logged={!connected} click={() => history.push("/login")}>
            Entrar
          </Button>
          <Button logged={!connected} click={() => history.push("/register")}>
            Criar Conta
          </Button>
          <Button color="purple.2" click={() => history.push("/search")}>
            Serviços
          </Button>

          <Button device="mobile" logged={connected} click={showProfile}>
            <UserMenuIcon>
              <ProfileIcon color="white" />
            </UserMenuIcon>
            <div>
              <p>Ir para meu perfil</p>
            </div>
          </Button>
          <Button device="mobile" logged={connected} click={handleLogout}>
            <UserMenuIcon variant="error">
              <LogOutIcon color="white" />
            </UserMenuIcon>
            <div>
              <p>Sair da minha conta</p>
            </div>
          </Button>

          <UserMenu>
            <MenuButton sx={UserIconStyle(connected)}>
              <UserIcon color="grey.1" />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={showProfile}>
                <UserMenuIcon>
                  <ProfileIcon />
                </UserMenuIcon>
                <div>
                  <p>Ir para meu perfil</p>
                  <span>Ver minhas solicitações</span>
                </div>
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <UserMenuIcon variant="error">
                  <LogOutIcon color="white" />
                </UserMenuIcon>
                <div>
                  <p>Sair da minha conta</p>
                  <span>Sair da minha conta agora</span>
                </div>
              </MenuItem>
            </MenuList>
          </UserMenu>
        </UserMenuNav>
      </HeaderContainer>
    </Header>
  );
};

export default HeaderComponent;
