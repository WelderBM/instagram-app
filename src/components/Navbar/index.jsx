import { Flex, Typography, Spacer } from "../../style/index";
import * as C from "./style";
import { BsSun, BsGear } from "react-icons/bs";
import { BiMoon, BiExit } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { RiGlobalLine } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import { MdMonitor } from "react-icons/md";

import logoInstagram from "../../assets/logo-instagram.svg";

export function NavBar ({ theme, themeToggler }) {
  const TextGroup = ({ Title, Subtitle }) => {
    return (
      <Flex gap="4px">
        <Typography>{Title}</Typography>
        <Typography weight="300" size="12px" height="14px">
          {Subtitle}
        </Typography>
      </Flex>
    );
  };

  const menuNav = [
    {
      icon: <AiOutlineHome />,
      menuName: "Inicio",
    },
    {
      icon: <RiGlobalLine />,
      menuName: "Explorar",
    },
    {
      icon: <FiSend />,
      menuName: "Direct",
    },
    {
      icon: <MdMonitor />,
      menuName: "IGTV",
    },
    {
      icon: <BsGear />,
      menuName: "Ajustes",
    },
  ];

  return (
    <C.Container>
      <Flex>
        <C.BtnTheme onClick={themeToggler}>
          {theme === "dark" ? <BsSun /> : <BiMoon />}
        </C.BtnTheme>
      </Flex>
      <img src={logoInstagram} alt="Logo instagram" />
      <Flex>
        <C.Profile>
          <img
            src="https://avatars.githubusercontent.com/u/92405076?v=4"
            alt="foto de perfil"
          />
        </C.Profile>
        <Flex gap="4px">
          <TextGroup
            Title="Welder Barroso"
            Subtitle="@Welder_Barroso_"
          ></TextGroup>

          <Spacer margin="8px"></Spacer>

          <Flex direction="row" justify="space-between">
            <TextGroup Title="148" Subtitle="Publicações"></TextGroup>
            <TextGroup Title="15K" Subtitle="Seguidores"></TextGroup>
            <TextGroup Title="1K" Subtitle="Seguindo"></TextGroup>
          </Flex>
        </Flex>
        <Flex align="start" gap="16px" padding="10px 0 30px 30px">
          {menuNav.map((menu) => {
            return (
              <C.ListIcon key={menu.menuName}>
                {menu.icon}
                <Typography>{menu.menuName}</Typography>
              </C.ListIcon>
            );
          })}
          <C.Divider />
          <C.ListIcon>
            <BiExit />
            <Typography>Sair</Typography>
          </C.ListIcon>
        </Flex>
      </Flex>
    </C.Container>
  );
}
