import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled(Link)`
  display: block;
  min-height: 60px;
  min-width: ${(props) => (props.$maxWidth ? `100%` : `260px`)};
  padding: 0 24px;
  max-width: 700px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  font-weight: 700;
  line-height: 58px;
  color: ${(props) => props.theme.colorBackground};
  text-align: center;
  text-decoration: none;
  background-color: ${(props) => props.theme.colorButton};
  border: none;
  background-image: none;
  box-shadow: none;
  cursor: pointer;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;
  box-sizing: border-box;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colorButtonHover};
    box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    box-shadow: none;
    background-color: ${(props) => props.theme.colorButton};
    cursor: auto;
  }
`;

export default StyledButton;
