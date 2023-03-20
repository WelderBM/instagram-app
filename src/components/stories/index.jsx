import { useState } from 'react'
import { Flex, Typography, Button } from "../../style/index";
import * as C from "./style";

export function Stories() {
    const [showAll, setShowAll] = useState(false)

    const handleShowAll = () => {
        showAll === false ? setShowAll(true) : setShowAll(false)
    }
  return (
    <Flex padding="8px 20px" align="start" gap="4px">
      <Typography weight="400" size="18px" height="21px">
        Stories
      </Typography>

      <Flex align="end">
        <Button onClick={handleShowAll}>
          <Typography size="14px"> {showAll ? 'Ver mais' : 'Ver menos' }</Typography>
        </Button>
      </Flex>

      <C.Container>
        {Array.from(Array(showAll? 8 : 40)).map((item, index) => (
          <C.Profile key={index}>
            <img
              src="https://avatars.githubusercontent.com/u/92405076?v=4"
              alt="foto de perfil"
            />
          </C.Profile>
        ))}
      </C.Container>
    </Flex>
  );
}
