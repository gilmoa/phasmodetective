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

  const proof = {
    box: box,
    prints: prints,
    writing: writing,
    freeze: freeze,
    emf: emf,
    orbs: orbs,
  };

  const setProof = {
    box: setBox,
    prints: setPrints,
    writing: setWriting,
    freeze: setFreeze,
    emf: setEmf,
    orbs: setOrbs,
  };

  return (
    <main className={main}>
      <ProofsList proof={proof} setProof={setProof} />
      <GhostsList proof={proof} />
    </main>
  );
};

export default Main;
