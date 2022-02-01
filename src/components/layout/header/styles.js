import styled from "styled-components";

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => props.theme.pageWidth};
  height: ${(props) => props.theme.footerHeight};
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.pagePadding};
  background-color: ${(props) => props.theme.colorBackground};
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  z-index: 5;
  box-sizing: border-box;
`;

export default StyledHeader;
