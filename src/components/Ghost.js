import React from "react";

const Ghost = ({ id, name, proofs }) => {
  return (
    <li>
      <b>{name}</b>
      {Object.keys(proofs).map((key) => {
        return proofs[key] ? <p>{key}</p> : "";
      })}
    </li>
  );
};

export default Ghost;
