import React from "react";

import Ghost from "./Ghost";
import GhostsInfo from "./GhostsInfo";

import { ghostslist } from "./GhostsList.module.scss";

const GhostsList = ({ proofs }) => {
  return (
    <section className={ghostslist}>
      <h1>👻 Ghosts</h1>
      <ul>
        {GhostsInfo.map(({ name, checks }, id) => {
          let hide = false;
          Object.keys(proofs).forEach((key) => {
            if (proofs[key] === true || proofs[key] === false) {
              if (proofs[key] !== checks[key]) {
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
              proofs={proofs}
              className={`ghost${hide ? " ghost-hidden" : ""}`}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default GhostsList;
