import React, { useState } from "react";

import ProofsList from "./ProofsList";
import GhostsList from "./GhostsList";

import { main } from "./Main.module.scss";

// TODO: move this up, display name needed by ghosts
const proofsInfo = {
  box: { name: "box", displayName: "spirit box", icon: "🎤" },
  prints: { name: "prints", displayName: "finger prints", icon: "🖐" },
  writing: { name: "writing", displayName: "ghost writing", icon: "📖" },
  freeze: { name: "freeze", displayName: "freezing", icon: "🥶" },
  emf: { name: "emf", displayName: "EMF", icon: "📻" },
  orbs: { name: "orbs", displayName: "ghost orbs", icon: "💫" },
};

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
      <ProofsList
        proofs={proofs}
        setProofs={setProofs}
        proofsInfo={proofsInfo}
      />
      <GhostsList proofs={proofs} proofsInfo={proofsInfo} />
    </main>
  );
};

export default Main;
