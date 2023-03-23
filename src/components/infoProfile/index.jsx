import { AiFillHeart} from "react-icons/ai"
import {FaRegComment} from "react-icons/fa"
import {Flex, Typography} from '../../style'
import {randomNumber} from "../../utils/randomNumber"

import * as C from "./style"

export function InfoProfile ({name, photo, link, liked}) {
  return (
    <Flex direction="row" justify="space-between">
      <C.Container>
        <C.Link href={link} target="_blank">
           <C.ProfileImage
             src={photo}
             alt="foto de perfil"
           />
           <Typography>{name}</Typography>
        </C.Link>
      </C.Container>

      <C.Container>
        <div style={{color:"red"}}>
          <AiFillHeart/>
          <Typography>{randomNumber()}</Typography>
        </div>
        
        <div>
          <FaRegComment/>
          <Typography>{randomNumber()}</Typography>
        </div>
      </C.Container>
    </Flex>
  )
}
