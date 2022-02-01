import styled from "styled-components";
import Title from "/src/components/ui/title/title";
import { Ul } from "/src/components/styled";

export const AdvantagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
`;

export const StyledTitleAdvantage = styled(Title)`
  margin-bottom: 64px;
`;

export const StyledUl = styled(Ul)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${(props) => props.theme.indent};
  width: 1100px;
  margin-bottom: 64px;
`;
