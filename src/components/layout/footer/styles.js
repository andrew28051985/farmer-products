import styled from "styled-components";

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => props.theme.pageWidth};
  height: ${(props) => props.theme.footerHeight};
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.pagePadding};
  background-color: ${(props) => props.theme.colorBackground};
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 5;
  box-sizing: border-box;

  p {
    line-height: 150%;
  }
`;

export default StyledFooter;
