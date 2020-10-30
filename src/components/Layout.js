import React from "react";
import CookieConsent from "react-cookie-consent";

import Header from "./Header";
import Footer from "./Footer";

import { layout } from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={layout}>
      <Header />
      {children}
      <Footer />
      <CookieConsent>
        This site uses cookies to enhance the user experience.
      </CookieConsent>
    </div>
  );
};

export default Layout;
