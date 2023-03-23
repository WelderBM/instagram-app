import { useState } from 'react'
import { Flex, Typography, Button } from "../../style/index";
import * as C from "./style";

export function Stories({photos}) {
    const [showAll, setShowAll] = useState(false)

    photos = showAll ? photos : photos?.slice(0,10)

    function handleShowAll () {
        setShowAll(!showAll)
    }
  return (
    <Flex padding="8px 20px" align="start" gap="4px">
      <Typography weight="400" size="18px" height="21px">
        Stories
      </Typography>

      <Flex align="end">
        <Button onClick={handleShowAll}>
          <Typography size="14px"> {showAll ? 'Ver menos' : 'Ver mais'}</Typography>
        </Button>
      </Flex>

      <C.Container>
        {photos.map((photo) => (
          <C.Profile key={photo?.id}>
            <img
              src={photo?.src?.medium}
              alt="fotografia"
            />
          </C.Profile>
        ))}
      </C.Container>
    </Flex>
  );
}
