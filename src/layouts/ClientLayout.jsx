import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import withLayout from "../hoc/withLayout";

function ClientLayout(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default withLayout(ClientLayout);
