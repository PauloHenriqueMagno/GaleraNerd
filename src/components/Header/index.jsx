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
    UserIconStyle
} from "./styled";
import { useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/User";
import Logo from "../../assets/logoGN.svg";
import UserIcon from "../../assets/UserIconSVG";
import MenuIcon from "../../assets/MenuSGV";
import ProfileIcon from "../../assets/ProfileIconSVG";
import LogOutIcon from "../../assets/LogoutSVG"
import {
    MenuButton,
    MenuList,
    MenuItem
} from "@chakra-ui/react";
import theme from "../../Styles";

const HeaderComponent = () => {
    const [isOpen, setIsOpen] = useState("");
    const { userInfo } = useContext(UserContext);

    const connected = (userInfo === {} ? true : false);
    
    const history = useHistory();

    const MenuNav = ThemeHeader.components.nav[(isOpen? "open": "close")];

    return (
        <Header>
            <HeaderContainer>
                <HeaderLogo
                    onClick={()=>history.push("/")}
                >
                    <LogoImage src={Logo} alt="Logo" />
                </HeaderLogo>

                <MenuUser
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <MenuIcon />
                </MenuUser>
                <UserMenuNav sx={(isOpen!== "" && MenuNav)}>
                    <Button
                        logged={connected}
                        onClick={()=> history.push("/login")}
                    >
                        Entrar
                    </Button>
                    <Button
                        logged={connected}
                        onClick={()=> history.push("/register")}
                    >
                        Criar Conta
                    </Button>
                    <Button
                        color={theme.colors.purple[2]}
                        onClick={()=> history.push("/services")}
                    >
                        Serviços
                    </Button>

                    <Button
                        device="mobile"
                        logged={!connected}
                    >
                        <UserMenuIcon>
                            <ProfileIcon color={theme.colors.white} />
                        </UserMenuIcon>
                        <div>
                            <p>Ir para meu perfil</p>
                        </div>
                    </Button>
                    <Button
                        device="mobile"
                        logged={!connected}
                    >
                        <UserMenuIcon variant="error">
                            <LogOutIcon color={theme.colors.white} />
                        </UserMenuIcon>
                        <div>
                            <p>Sair da minha conta</p>
                        </div>
                    </Button>

                    <UserMenu >
                        <MenuButton
                            sx={UserIconStyle(!connected)}
                        >
                            <UserIcon color={theme.colors.grey[1]} />
                        </MenuButton>
                        <MenuList>
                            <MenuItem>
                                <UserMenuIcon>
                                    <ProfileIcon />
                                </UserMenuIcon>
                                <div>
                                    <p>Ir para meu perfil</p>
                                    <span>Ver minhas solicitações</span>
                                </div>
                            </MenuItem>
                            <MenuItem>
                                <UserMenuIcon variant="error">
                                    <LogOutIcon color={theme.colors.white} />
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