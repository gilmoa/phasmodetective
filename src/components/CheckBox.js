import React from "react";

import { checkbox } from "./CheckBox.module.scss";

const CheckBox = ({ onChange, checked, icon, color }) => {
  return (
    <label className={checkbox}>
      <input type="checkbox" onChange={onChange} checked={checked} />
      <div style={checked ? { backgroundColor: color } : { color: color }}>
        {icon ? icon : "✔"}
      </div>
    </label>
  );
};

export default CheckBox;
