import styled, { css } from "styled-components";

const gridList = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${(props) =>
    props.$indent ? `${props.$indent}px` : `${props.theme.indent}`};
  width: 1100px;
  margin-bottom: 64px;

  div {
    display: grid;
    grid-template-columns: 72px 178px auto;
    grid-template-rows: 25px 51px 81px;
    width: 500px;
    padding: ${(props) =>
      props.$indent ? `${props.$indent}px` : `${props.theme.indent}`};

    img {
      grid-column: 1/2;
      grid-row: 1/3;
    }
    span {
      grid-column: 2/3;
      grid-row: 1/2;
      padding: 2px 10px;
      font-weight: normal;
      font-size: 14px;
      line-height: 150%;
      color: #ffffff;
    }
    h3 {
      grid-column: 2/4;
      grid-row: 2/3;
      margin-bottom: ${(props) =>
        props.$indent ? `${props.$indent}px` : `${props.theme.indent}`};
      font-size: ${(props) =>
        props.$fontSize
          ? `${props.$fontSize}px`
          : `${props.theme.fontSizeDefault}`};
      line-height: 150%;
    }
    p {
      grid-column: 1/4;
      grid-row: 3/4;
      margin: 0;
    }
  }
`;

const navList = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  ${(props) => (props.$isGridList ? gridList : "")}
  ${(props) => (props.$isNavList ? navList : "")}
`;

export default Ul;
