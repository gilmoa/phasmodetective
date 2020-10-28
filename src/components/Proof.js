import React, { useState } from "react";
import Switch from "react-switch";

const Proof = ({ id, name }) => {
  const [isProof, setIsProof] = useState(false);
  const [notProof, setNotProof] = useState(false);

  const toggleNotProof = () => {
    setNotProof(!notProof);
    if (isProof) toggleIsProof();
  };
  const toggleIsProof = () => {
    setIsProof(!isProof);
    if (notProof) toggleNotProof();
  };

  return (
    <li key={id}>
      <b>{name}</b>
      <Switch onChange={toggleNotProof} checked={notProof} onColor="#800" />
      <Switch onChange={toggleIsProof} checked={isProof} />
    </li>
  );
};

export default Proof;
