import { FiSend } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io";
import { AiOutlinePlusCircle } from "react-icons/ai";

import * as C from "./style"

const Header = () => {
  return (
    <C.Container>
      <C.Input placeholder="🔍 Buscar" />
      <C.ContainerActions>
        <IoNotificationsOutline />
        <FiSend />
        <C.Button>
          <AiOutlinePlusCircle />
          Nova foto
        </C.Button>
      </C.ContainerActions>
    </C.Container>
  );
}

export default Header