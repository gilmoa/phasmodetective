import React from "react";

import { header } from "./Header.module.scss";

const Header = () => {
  return (
    <header className={header}>
      <h1>Phasmodetective</h1>
      <svg
        className="installBtn"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="8 17 12 21 16 17"></polyline>
        <line x1="12" y1="12" x2="12" y2="21"></line>
        <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>
      </svg>
    </header>
  );
};

export default Header;
