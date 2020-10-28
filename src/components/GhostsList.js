import React from "react";

import Ghost from "./Ghost";

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

const GhostsList = () => {
  return (
    <section>
      <ul>
        {ghosts.map(({ name, proofs }, id) => {
          return <Ghost id={id} name={name} proofs={proofs} />;
        })}
      </ul>
    </section>
  );
};

export default GhostsList;
