import styled from "styled-components";
import { TitleSize } from "./title";

export const StyledTitle = styled.h1`
  margin: 0;
  padding: 0;
  margin-bottom: ${(props) => props.marginBottom || 0}px;
  font-weight: 700;
  line-height: 115%;
  font-size: ${(props) => {
    let fontSize = "36px";
    if (props.$size === TitleSize.BIG) {
      fontSize = "44px";
    }
    if (props.$size === TitleSize.SMALL) {
      fontSize = "24px";
    }
    if (props.$size === TitleSize.CARD) {
      fontSize = "18px";
    }
    return fontSize;
  }};
  line-height: ${(props) => {
    let lineHeight = "115%";
    if (props.$size === TitleSize.SMALL) {
      lineHeight = "130%";
    }
    if (props.$size === TitleSize.CARD) {
      lineHeight = "150%";
    }
    return lineHeight;
  }};
`;
