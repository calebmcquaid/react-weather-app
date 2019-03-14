import styled from "@emotion/styled";

const Button = styled.button`
    height: 20px;
    width: 177px;

    margin: 10px;
    background-color: {props => props.theme.buttonObjectColor};
`;

export default Button;
