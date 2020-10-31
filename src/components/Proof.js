import React from "react";
import CheckBox from "./CheckBox";

import { proofitem } from "./Proof.module.scss";

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
    <li className={proofitem}>
      <b>
        {icon} {name}
      </b>
      <CheckBox
        onChange={toggleNotProof}
        checked={notProof}
        icon={"✖"}
        color={"#800"}
      />
      <CheckBox
        onChange={toggleIsProof}
        checked={isProof}
        icon={"✔"}
        color={"#080"}
      />
    </li>
  );
};

export default Proof;
