import styled from "styled-components";
import { Section } from "/src/components/styled";
import Title from "/src/components/ui/title/title";
import about from "/src/assets/about.svg";

export const StyledSection = styled(Section)`
  position: relative;
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  margin-bottom: 100px;
  background-color: ${(props) => props.theme.colorBackgroundMain};
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    width: 447px;
    height: 446px;
    top: 76px;
    right: ${(props) => props.theme.pagePadding};
    border-radius: 50%;
    background-color: #c4e2ff;
  }
  &::before {
    content: "";
    position: absolute;
    width: 273px;
    height: 627px;
    top: 37px;
    right: 177px;
    background: url(${about}) no-repeat;
    z-index: 2;
  }
`;

export const StyledTextWrapper = styled.div`
  width: 637px;
  padding: 183px 0px 183px 90px;
  z-index: 2;
  box-sizing: border-box;
`;

export const StyledTitleAbout = styled(Title)`
  margin-bottom: 25px;
`;

export const StyledText = styled.p`
  margin: 0;
`;
