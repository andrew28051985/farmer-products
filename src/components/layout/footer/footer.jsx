import React from "react";
import StyledFooter from "./styles";
import Logo from "/src/components/ui/logo/logo";
import Copyright from "/src/components/ui/copyright/copyright";

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <Logo />
        <Copyright>Создано 2022</Copyright>
      </StyledFooter>
    </>
  );
};

export default Footer;
