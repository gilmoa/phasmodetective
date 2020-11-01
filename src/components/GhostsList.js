import React from "react";

import Ghost from "./Ghost";
import { GhostsInfo } from "../Infos";

import { ghostslist } from "./GhostsList.module.scss";

const GhostsList = ({ evidences }) => {
  return (
    <section className={ghostslist}>
      <h1>👻 Ghosts</h1>
      <ul>
        {GhostsInfo.map(({ name, checks }, id) => {
          let hide = false;
          Object.keys(evidences).forEach((key) => {
            if (evidences[key] === true || evidences[key] === false) {
              if (evidences[key] !== checks[key]) {
                hide = true;
              }
            }
          });
          return hide ? (
            ""
          ) : (
            <Ghost
              key={id}
              name={name}
              checks={checks}
              evidences={evidences}
              className={`ghost${hide ? " ghost-hidden" : ""}`}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default GhostsList;
