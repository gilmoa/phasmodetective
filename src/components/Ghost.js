import React from "react";

import { EvidencesInfo } from "../Infos";

import { ghost } from "./Ghost.module.scss";

const Ghost = ({ name, checks, evidences }) => {
  return (
    <li className={ghost}>
      <h2>{name}</h2>
      {Object.keys(checks).map((name, id) => {
        return checks[name] && evidences[name] !== checks[name] ? (
          <p key={id}>{EvidencesInfo[name].displayName}</p>
        ) : (
          ""
        );
      })}
    </li>
  );
};

export default Ghost;
