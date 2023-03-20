import * as C from "./style";
import { Typography } from "../../style";
import { InfoProfile } from "../infoProfile";

export function Publications() {
  return (
    <C.Container>
      <Typography>Publicações</Typography>
      <C.ContainerPublications>
        {Array.from(Array(40)).map((item, index) => (
          <C.Content>
            <C.PublicationImage
              src="https://avatars.githubusercontent.com/u/92405076?v=4"
              alt="foto de perfil"
            />
            <InfoProfile>Info</InfoProfile>
          </C.Content>
        ))}
      </C.ContainerPublications>
    </C.Container>
  );
}
