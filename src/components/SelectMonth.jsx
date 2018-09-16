import React from "react";
import PropTypes from "prop-types";
import { HTMLSelect } from "@blueprintjs/core";
import Localization from "../utils/Localization";

const SelectMonth = ({ value, onChange }) => (
  <HTMLSelect value={value} onChange={onChange}>
    {Localization.months.map((item, index) => (
      <option key={item} value={index}>
        {item}
      </option>
    ))}
  </HTMLSelect>
);

SelectMonth.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SelectMonth;
