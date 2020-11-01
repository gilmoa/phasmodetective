import React, { useState } from "react";

import EvidencesList from "./EvidencesList";
import GhostsList from "./GhostsList";

import { main } from "./Main.module.scss";

const Main = () => {
  const [box, setBox] = useState(null);
  const [prints, setPrints] = useState(null);
  const [writing, setWriting] = useState(null);
  const [freeze, setFreeze] = useState(null);
  const [emf, setEmf] = useState(null);
  const [orbs, setOrbs] = useState(null);

  const evidences = {
    box: box,
    prints: prints,
    writing: writing,
    freeze: freeze,
    emf: emf,
    orbs: orbs,
  };

  const setEvidences = {
    box: setBox,
    prints: setPrints,
    writing: setWriting,
    freeze: setFreeze,
    emf: setEmf,
    orbs: setOrbs,
  };

  return (
    <main className={main}>
      <EvidencesList evidences={evidences} setEvidences={setEvidences} />
      <GhostsList evidences={evidences} />
    </main>
  );
};

export default Main;
