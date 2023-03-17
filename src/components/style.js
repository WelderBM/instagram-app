import styled, { css } from "styled-components";


export const Container = styled.div`
    width: 338px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    ${(props) => css`
        background-color: ${props.theme.primary};
        border: ${`1px solid ${props.theme.primary}`};
        box-shadow: ${`9px 0 33px 39px ${props.theme.boxShadow}`};
    `
    }
`