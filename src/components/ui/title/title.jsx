import React from "react";
import { StyledTitle } from "./styles";
//import "./style.css";

export const TitleSize = {
  BIG: "big",
  SMALL: "small",
  CARD: "card",
  DEFAULT: ""
};

export const TitleRange = {
  ONE: "1",
  TWO: "2",
  THREE: "3",
  FOUR: "4"
};

function Title({ children, size, range, className, marginBottom }) {
  return (
    <StyledTitle
      as={`h${range}`}
      $size={size}
      className={className}
      marginBottom={marginBottom}
    >
      {children}
    </StyledTitle>
  );
}

export default Title;
