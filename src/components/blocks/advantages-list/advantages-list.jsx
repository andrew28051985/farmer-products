import React from "react";
import { Section, Li } from "/src/components/styled";
import { AdvantagesWrapper, StyledTitleAdvantage, StyledUl } from "./styles";
import { TitleRange } from "/src/components/ui/title/title";
import AdvantageCard from "/src/components/ui/advantage-card/advantage-card";
import Button from "/src/components/ui/button/button";
import { AppRoute } from "/src/const";
import "./style.css";

const AdvantagesList = ({ advantages }) => {
  return (
    <Section>
      {advantages && advantages.length ? (
        <>
          <AdvantagesWrapper>
            <StyledTitleAdvantage range={TitleRange.TWO}>
              Почему фермерские продукты лучше?
            </StyledTitleAdvantage>
            <StyledUl $isGridList>
              {advantages.map((advantage) => (
                <Li key={advantage.id}>
                  <AdvantageCard
                    image={advantage.image}
                    sizeImage={advantage.sizeImage}
                    label={advantage.label}
                    titleText={advantage.titleText}
                  >
                    {advantage.text}
                  </AdvantageCard>
                </Li>
              ))}
            </StyledUl>
            <Button minWidth={260} link={AppRoute.BUY}>
              Купить
            </Button>
          </AdvantagesWrapper>
        </>
      ) : null}
    </Section>
  );
};

export default AdvantagesList;
