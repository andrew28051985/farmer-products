import React from "react";
import Title, { TitleSize, TitleRange } from "/src/components/ui/title/title";
import { Wrapper, ColorBgLAbel } from "./styles";

const advantageLabel = {
  farmer: "farmer",
  shop: "shop"
};

const AdvantageCard = ({ children, image, sizeImage, label, titleText }) => {
  let options;

  if (label === advantageLabel.farmer) {
    options = {
      text: "Фермерские продукты",
      color: label
    };
  }
  if (label === advantageLabel.shop) {
    options = {
      text: "Магазинные продукты",
      color: label
    };
  }

  return (
    <>
      <Wrapper bgColor={options.color}>
        <img
          src={image}
          alt={titleText}
          className="advantage-card__image"
          width={sizeImage}
          height={sizeImage}
        />
        <ColorBgLAbel colorBg={options.color}>{options.text}</ColorBgLAbel>
        <Title size={TitleSize.CARD} range={TitleRange.THREE}>
          {titleText}
        </Title>
        <p>{children}</p>
      </Wrapper>
    </>
  );
};

export default AdvantageCard;
