import styled from "styled-components";

export const Container = styled.div`
width: 100%;
padding: 10px 20px;
display: flex;
flex-direction: column;
gap: 20px;
`

export const ContainerPublications = styled.div`
display: flex;
width: 100%;
flex-wrap: wrap;
gap: 12px;
height: 600px;
overflow-y: scroll;

&::-webkit-scrollbar {
  width: 4px;  
  height: 4px;
}

&::-webkit-scrollbar-track {
  background: tarnsparent;       
}

&::-webkit-scrollbar-thumb {
  background-color: ${(props) => props.theme.textPrimary};
  border-radius: 20px;
}
`

export const Content = styled.div`
display: flex;
width: 240px;
gap: 20px;
flex-direction: column  ;
`

export const PublicationImage = styled.img`
width: 100%;
height: 220px;
border-radius: 20px;
object-fit: cover;
`
