import React from "react";
import CheckBox from "./CheckBox";

import { evidenceitem } from "./Evidence.module.scss";

const Evidence = ({ name, icon, evidence, setEvidence }) => {
  let notEvidence = evidence === false;
  let isEvidence = evidence === true;

  const changeEvidence = () => {
    let x = null;
    if (notEvidence) x = false;
    if (isEvidence) x = true;
    setEvidence(x);
  };

  const toggleNotEvidence = () => {
    notEvidence = !notEvidence;
    if (isEvidence) isEvidence = false;
    changeEvidence();
  };

  const toggleIsEvidence = () => {
    isEvidence = !isEvidence;
    if (notEvidence) notEvidence = false;
    changeEvidence();
  };

  return (
    <li className={evidenceitem}>
      <b>
        {icon} {name}
      </b>
      <CheckBox
        onChange={toggleNotEvidence}
        checked={notEvidence}
        icon={"✖"}
        color={"#800"}
      />
      <CheckBox
        onChange={toggleIsEvidence}
        checked={isEvidence}
        icon={"✔"}
        color={"#080"}
      />
    </li>
  );
};

export default Evidence;
