import React from "react";

import Header from "./Header";
import Footer from "./Footer";

import { layout } from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
