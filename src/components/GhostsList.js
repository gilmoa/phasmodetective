import React from "react";

import Ghost from "./Ghost";

import { ghostslist } from "./GhostsList.module.scss";

// TODO: switch proof > proofs > checks
const ghosts = [
  {
    name: "spirit",
    proofs: {
      box: true,
      prints: true,
      writing: true,
      freeze: false,
      emf: false,
      orbs: false,
    },
  },
  {
    name: "wraith",
    proofs: {
      box: true,
      prints: true,
      writing: false,
      freeze: true,
      emf: false,
      orbs: false,
    },
  },
  {
    name: "phantom",
    proofs: {
      box: false,
      prints: false,
      writing: false,
      freeze: true,
      emf: true,
      orbs: true,
    },
  },
  {
    name: "poltergeist",
    proofs: {
      box: true,
      prints: true,
      writing: false,
      freeze: false,
      emf: false,
      orbs: true,
    },
  },
  {
    name: "banshee",
    proofs: {
      box: false,
      prints: true,
      writing: false,
      freeze: true,
      emf: true,
      orbs: false,
    },
  },
  {
    name: "jinn",
    proofs: {
      box: true,
      prints: false,
      writing: false,
      freeze: false,
      emf: true,
      orbs: true,
    },
  },
  {
    name: "mare",
    proofs: {
      box: true,
      prints: false,
      writing: false,
      freeze: true,
      emf: false,
      orbs: true,
    },
  },
  {
    name: "revenant",
    proofs: {
      box: false,
      prints: true,
      writing: true,
      freeze: false,
      emf: true,
      orbs: false,
    },
  },
  {
    name: "shade",
    proofs: {
      box: false,
      prints: false,
      writing: true,
      freeze: false,
      emf: true,
      orbs: true,
    },
  },
  {
    name: "demon",
    proofs: {
      box: true,
      prints: false,
      writing: true,
      freeze: true,
      emf: false,
      orbs: false,
    },
  },
  {
    name: "yurei",
    proofs: {
      box: false,
      prints: false,
      writing: true,
      freeze: false,
      emf: true,
      orbs: true,
    },
  },
  {
    name: "oni",
    proofs: {
      box: true,
      prints: true,
      writing: false,
      freeze: false,
      emf: false,
      orbs: true,
    },
  },
];

const GhostsList = ({ proof }) => {
  return (
    <section className={ghostslist}>
      <h1>👻 Ghosts</h1>
      <ul>
        {ghosts.map(({ name, proofs }, id) => {
          let hide = false;
          Object.keys(proof).forEach((key) => {
            if (proof[key] === true || proof[key] === false) {
              console.info(
                `${name} [${key}] => '${proof[key]}' !== ${proofs[key]}`
              );
              if (proof[key] !== proofs[key]) {
                hide = true;
              }
              console.warn(`${name} hide: ${hide}`);
            }
          });
          return hide ? (
            ""
          ) : (
            <Ghost
              key={id}
              name={name}
              proofs={proofs}
              proof={proof}
              className={`ghost${hide ? " ghost-hidden" : ""}`}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default GhostsList;
