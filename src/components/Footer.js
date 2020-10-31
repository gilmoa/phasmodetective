import React from "react";

import { footer, donate } from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={footer}>
      <p>
        Phasmophobia is a game by{" "}
        <a href="https://kineticgames.co.uk/">Kinetic Games</a>, all rights
        reserved &copy;.
      </p>
      <div className={donate}>
        <p>If you found this useful, please consider donating.</p>
        <form
          action="https://www.paypal.com/donate"
          method="post"
          target="_top"
        >
          <input type="hidden" name="cmd" value="_donations" />
          <input type="hidden" name="business" value="3K8CVVJ8QBBPG" />
          <input type="hidden" name="currency_code" value="EUR" />
          <input
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
            border="0"
            name="submit"
            title="PayPal - The safer, easier way to pay online!"
            alt="Donate with PayPal button"
          />
        </form>
      </div>
      <p>Andrea Gilmozzi &copy; 2020</p>
    </footer>
  );
};

export default Footer;
