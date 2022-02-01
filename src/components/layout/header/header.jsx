import React from "react";
import StyledHeader from "./styles";
import Logo from "/src/components/ui/logo/logo";
import Nav from "/src/components/layout/nav/nav";

const Header = ({
  pageUrl // урл страницы
}) => {
  return (
    <>
      <StyledHeader>
        <Logo />
        <Nav pageUrl={pageUrl} />
      </StyledHeader>
    </>
  );
};

export default Header;
