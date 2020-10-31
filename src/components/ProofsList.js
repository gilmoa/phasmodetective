import React from "react";

import Proof from "./Proof";
import { ProofsInfo } from "../Infos";

import { proofslist } from "./ProofsList.module.scss";

const ProofsList = ({ proofs, setProofs }) => {
  return (
    <section className={proofslist}>
      <h1>🔎 Proofs</h1>
      <ul>
        {Object.keys(ProofsInfo).map((name, id) => {
          let { displayName, icon } = ProofsInfo[name];
          return (
            <Proof
              key={id}
              name={displayName}
              icon={icon}
              proof={proofs[name]}
              setProof={setProofs[name]}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default ProofsList;
