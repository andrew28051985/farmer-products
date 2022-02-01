import React from "react";
import { ReactComponent as LogoImage } from "/src/assets/logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LogoLink = styled(Link)`
  text-decoration: none;
`;

const Logo = () => {
  return (
    <>
      <LogoLink to="/">
        <LogoImage />
      </LogoLink>
    </>
  );
};

export default Logo;
