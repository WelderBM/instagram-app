import styled, {css} from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 20px 20px 10px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;

  border-radius: 20px;
  outline: none;
  padding: 13px 38px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  ${(props) => css`
    background-color: ${props.theme.primary};
    border: 1px solid ${props.theme.tertiary};
    box-shadow: 0px 0px 13px 2px ${props.theme.boxShadow};
    color: ${props.theme.textSecondary};
  `}

  &::placeholder {
    color: ${(props) => props.theme.textSecondary};
  }
`;

export const ContainerActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  .icon {
    font-size: 24px;
    color: ${(props) => props.theme.textPrimary};
    cursor: pointer;

    &:hover {
      opacity: 0.6;
    }
  }
`;

export const Button = styled.button`
  width: 110px;
  height: 40px;

  background: linear-gradient(90deg, #f093fb 0%, #f5576c 100%);
  border-radius: 23px;
  padding-right: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: .8;
  }

  &:active {
    opacity: .6;
  }
`;
