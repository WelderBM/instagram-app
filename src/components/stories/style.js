import styled from "styled-components";

export const Container = styled.div`
width: calc(100vw - 350px);
display: flex;
align-items: center;
justify-content: flex-start;
gap: 12px;
padding: 8px 12px;

overflow-x: scroll;

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

export const Profile = styled.div`
  position: relative;
  width: 74px;
  height: 74px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
    );

    img{
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }
`;