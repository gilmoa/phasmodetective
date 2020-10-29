import React, { useState } from "react";

import ProofsList from "./ProofsList";
import GhostsList from "./GhostsList";

import { main } from "./Main.module.scss";

const Main = () => {
  const [box, setBox] = useState(null);
  const [prints, setPrints] = useState(null);
  const [writing, setWriting] = useState(null);
  const [freeze, setFreeze] = useState(null);
  const [emf, setEmf] = useState(null);
  const [orbs, setOrbs] = useState(null);

  const proofs = {
    box: box,
    prints: prints,
    writing: writing,
    freeze: freeze,
    emf: emf,
    orbs: orbs,
  };

  const setProofs = {
    box: setBox,
    prints: setPrints,
    writing: setWriting,
    freeze: setFreeze,
    emf: setEmf,
    orbs: setOrbs,
  };

  return (
    <main className={main}>
      <ProofsList proofs={proofs} setProofs={setProofs} />
      <GhostsList proofs={proofs} />
    </main>
  );
};

export default Main;
