import React from "react";

import { footer } from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={footer}>
      <p>
        Phasmophobia is a game by{" "}
        <a href="https://kineticgames.co.uk/">Kinetic Games</a>, all rights
        reserved &copy;.
      </p>
      <p>Andrea Gilmozzi &copy; 2020</p>
    </footer>
  );
};

export default Footer;
