import React from "react";
import { TitleSize, TitleRange } from "/src/components/ui/title/title";
import {
  StyledSection,
  StyledTextWrapper,
  StyledTitleAbout,
  StyledText
} from "./styles";

const About = () => {
  return (
    <>
      <StyledSection>
        <StyledTextWrapper>
          <StyledTitleAbout
            size={TitleSize.BIG}
            range={TitleRange.ONE}
            className="title"
          >
            Магазин фермерских продуктов с доставкой
          </StyledTitleAbout>
          <StyledText>
            Все продукты изготавливаются под заказ. Фермеры начинают готовить
            продукты за день до отправки заказа клиентам. Именно поэтому мы
            принимаем заказы заранее и доставляем продукты максимально свежими.
          </StyledText>
        </StyledTextWrapper>
      </StyledSection>
    </>
  );
};

export default About;
