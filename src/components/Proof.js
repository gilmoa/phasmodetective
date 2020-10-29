import React from "react";
import Switch from "react-switch";

import { proofItem } from "./Proof.module.scss";

const Proof = ({ name, icon, proof, setProof }) => {
  let notProof = proof === false;
  let isProof = proof === true;

  const changeProof = () => {
    let x = null;
    if (notProof) x = false;
    if (isProof) x = true;
    setProof(x);
  };

  const toggleNotProof = () => {
    notProof = !notProof;
    if (isProof) isProof = false;
    changeProof();
  };

  const toggleIsProof = () => {
    isProof = !isProof;
    if (notProof) notProof = false;
    changeProof();
  };

  return (
    <li className={proofItem}>
      <b>
        {icon} {name}
      </b>
      <Switch onChange={toggleNotProof} checked={notProof} onColor="#800" />
      <Switch onChange={toggleIsProof} checked={isProof} />
    </li>
  );
};

export default Proof;
