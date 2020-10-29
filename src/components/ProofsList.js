import React from "react";

import Proof from "./Proof";

import { proofslist } from "./ProofsList.module.scss";

// TODO: move this up, display name needed by ghosts
const proofs = [
  { name: "box", displayName: "spirit box", icon: "🎤" },
  { name: "prints", displayName: "finger prints", icon: "🖐" },
  { name: "writing", displayName: "ghost writing", icon: "📖" },
  { name: "freeze", displayName: "freezing", icon: "🥶" },
  { name: "emf", displayName: "EMF", icon: "📻" },
  { name: "orbs", displayName: "ghost orbs", icon: "💫" },
];

const ProofsList = ({ proof, setProof }) => {
  return (
    <section className={proofslist}>
      <h1>🕵️‍♀️ Proofs</h1>
      <ul>
        {proofs.map(({ name, displayName, icon }, id) => {
          return (
            <Proof
              key={id}
              name={displayName}
              icon={icon}
              proof={proof[name]}
              setProof={setProof[name]}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default ProofsList;
