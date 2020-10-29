import React from "react";

import ProofsInfo from "./ProofsInfo";
import { ghost } from "./Ghost.module.scss";

const Ghost = ({ name, checks, proofs }) => {
  return (
    <li className={ghost}>
      <h2>{name}</h2>
      {Object.keys(checks).map((name, id) => {
        return checks[name] && proofs[name] !== checks[name] ? (
          <p key={id}>{ProofsInfo[name].displayName}</p>
        ) : (
          ""
        );
      })}
    </li>
  );
};

export default Ghost;
