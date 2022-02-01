import React from "react";
import Button from "/src/components/ui/button/button";
import { Ul, Li } from "/src/components/styled";
import { AppRoute } from "/src/const";
import { StyledButton } from "./styled";

const buttons = [
  {
    to: AppRoute.MAIN,
    button: (
      <StyledButton minWidth={260} key={AppRoute.MAIN} link={AppRoute.MAIN}>
        Главная
      </StyledButton>
    )
  },
  {
    to: AppRoute.BUY,
    button: (
      <Button minWidth={260} key={AppRoute.BUY} link={AppRoute.BUY}>
        Купить
      </Button>
    )
  }
];

const Nav = ({ pageUrl }) => {
  return (
    <>
      <Ul $isNavList>
        <Li>
          {buttons
            .filter((button) => button.to !== pageUrl)
            .map((button) => button.button)}
        </Li>
      </Ul>
    </>
  );
};

export default Nav;
