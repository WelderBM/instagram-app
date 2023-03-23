import * as C from "./style";
import { Typography } from "../../style";
import { InfoProfile } from "../InfoProfile";

export function Publications({photos}) {
  return (
    <C.Container>
      <Typography>Publicações</Typography>
      <C.ContainerPublications>
        {photos.map((photo, index) => (
          <C.Content key={index}>
            <C.PublicationImage
              src={photo?.src?.medium}
              alt="fotografia"
            />
            <InfoProfile name={photo?.photographer} photo={photo?.src?.small} link={photo.photographer_url} liked={photo?.liked}/>
          </C.Content>
        ))}
      </C.ContainerPublications>
    </C.Container>
  );
}
