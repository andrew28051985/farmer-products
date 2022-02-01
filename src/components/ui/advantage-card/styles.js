import styled, { css } from "styled-components";

const farmer = css`
  background-color: ${(props) => props.theme.colorBackgroungFarmer};
`;
const shop = css`
  background-color: ${(props) => props.theme.colorBackgroundMagazine};
`;
const farmerLabel = css`
  background-color: ${(props) => props.theme.colorLabelFarmer};
`;
const shopLabel = css`
  background-color: ${(props) => props.theme.colorLabelMagazine};
`;

export const Wrapper = styled.div`
  ${(props) => (props.bgColor === "farmer" ? farmer : shop)}
`;

export const ColorBgLAbel = styled.span`
  ${(props) => (props.colorBg === "farmer" ? farmerLabel : shopLabel)}
`;
