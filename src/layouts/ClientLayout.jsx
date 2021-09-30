import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import withLayout from "../hoc/withLayout";
import BackToTop from "components/BackToTop/BackToTop";

function ClientLayout(props) {
  return (
    <>
      <Header />
      {props.children}
      <BackToTop />
      <Footer />
    </>
  );
}

export default withLayout(ClientLayout);
