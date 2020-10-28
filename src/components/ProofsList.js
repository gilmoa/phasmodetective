import React from "react";

import Proof from "./Proof";

const proofs = ["box", "prints", "writing", "freeze", "emf", "orbs"];

const ProofsList = () => {
  return (
    <section>
      <ul>
        {proofs.map((name, id) => {
          return <Proof id={id} name={name} />;
        })}
      </ul>
    </section>
  );
};

export default ProofsList;
