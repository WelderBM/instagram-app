import styled from "styled-components";

export const ProfileImage = styled.img`
    width: 33px;
    height: 33px;
    border-radius: 50%;
`

export const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }
`

export const Link = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    `