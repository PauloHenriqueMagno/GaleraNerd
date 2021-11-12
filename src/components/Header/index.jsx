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
} from "./styled";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/logoGN.svg"
import MenuIcon from "../../assets/Menu.tsx"
import { BsPersonCircle } from "react-icons/bs";
import { RiLogoutBoxLine } from "react-icons/ri";
import { AiOutlineProfile } from "react-icons/ai"
import {
    MenuButton,
    MenuList,
    MenuItem
} from "@chakra-ui/react";
import theme from "../../Styles";

const HeaderComponent = () => {
    const [isOpen, setIsOpen] = useState("")
    const layoutDesconnected = ThemeHeader.components.button.display["false"];
    const layoutConnectedMobile = ThemeHeader.components.display.mobile["true"];
    const layoutConnectedDesktop = ThemeHeader.components.display.desktop["true"];
    
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
                        sx={layoutDesconnected}
                        onClick={()=> history.push("/login")}
                    >
                        Entrar
                    </Button>
                    <Button
                        sx={layoutDesconnected}
                        onClick={()=> history.push("/register")}
                    >
                        Criar Conta
                    </Button>
                    <Button
                        sx={ThemeHeader.colors.blue}
                        onClick={()=> history.push("/services")}
                    >
                        Serviços
                    </Button>

                    <Button sx={layoutConnectedMobile}>
                        <UserMenuIcon>
                            <AiOutlineProfile color={theme.colors.white} />
                        </UserMenuIcon>
                        <div>
                            <p>Ir para meu perfil</p>
                        </div>
                    </Button>
                    <Button sx={layoutConnectedMobile}>
                        <UserMenuIcon variant="error">
                            <RiLogoutBoxLine color={theme.colors.white} />
                        </UserMenuIcon>
                        <div>
                            <p>Sair da minha conta</p>
                        </div>
                    </Button>

                    <UserMenu >
                        <MenuButton sx={layoutConnectedDesktop}>
                            <BsPersonCircle color={theme.colors.grey[1]} />
                        </MenuButton>
                        <MenuList>
                            <MenuItem>
                                <UserMenuIcon>
                                    <AiOutlineProfile color={theme.colors.white} />
                                </UserMenuIcon>
                                <div>
                                    <p>Ir para meu perfil</p>
                                    <span>Ver minhas solicitações</span>
                                </div>
                            </MenuItem>
                            <MenuItem>
                                <UserMenuIcon variant="error">
                                    <RiLogoutBoxLine color={theme.colors.white} />
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