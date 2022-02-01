import React, { forwardRef } from "react";
import StyledButton from "./styles";

const Button = forwardRef(
  (
    {
      children,
      minWidth,
      maxWidth, // делает кнопку на 100% родителя
      link,
      className,
      onClick, // событие по клику
      ...props
    },
    ref
  ) => {
    return (
      <StyledButton
        {...props}
        $minWidth={minWidth}
        $maxWidth={maxWidth}
        ref={ref}
        {...(link ? { to: link } : { as: "button", onClick, type: "button" })}
        className={className}
      >
        {children}
      </StyledButton>
    );
  }
);

export default Button;
