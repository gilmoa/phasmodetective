import React from "react";

import { ghost } from "./Ghost.module.scss";

const Ghost = ({ name, proofs, proof }) => {
  return (
    <li className={ghost}>
      <h2>{name}</h2>
      {Object.keys(proofs).map((key, id) => {
        return proofs[key] && proof[key] !== proofs[key] ? (
          <p key={id}>{key}</p>
        ) : (
          ""
        );
      })}
    </li>
  );
};

export default Ghost;
