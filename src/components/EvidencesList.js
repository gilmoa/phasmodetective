import React from "react";

import Evidence from "./Evidence";
import { EvidencesInfo } from "../Infos";

import { evidenceslist } from "./EvidencesList.module.scss";

const EvidencesList = ({ evidences, setEvidences }) => {
  return (
    <section className={evidenceslist}>
      <h1>🔎 Evidences</h1>
      <ul>
        {Object.keys(EvidencesInfo).map((name, id) => {
          let { displayName, icon } = EvidencesInfo[name];
          return (
            <Evidence
              key={id}
              name={displayName}
              icon={icon}
              evidence={evidences[name]}
              setEvidence={setEvidences[name]}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default EvidencesList;
