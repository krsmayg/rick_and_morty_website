import React from "react";
import Header from "../components/Header";
const Layout = (props) => {
  return (
    <>
      <Header />
      <main className="main-content">
        <div className="main-content__wrapper">
          {props.children}
        </div>
      </main>
    </>
  );
};

export default Layout;
