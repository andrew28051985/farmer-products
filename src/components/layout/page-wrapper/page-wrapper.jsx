import React from "react";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
import StyledMain from "./styles";

const PageWrapper = ({ children, pageUrl }) => {
  return (
    <>
      <Header pageUrl={pageUrl} />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  );
};

export default PageWrapper;
