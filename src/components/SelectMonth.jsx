import React from "react";
import PropTypes from "prop-types";
import { HTMLSelect } from "@blueprintjs/core";
import Localization from "../utils/Localization";

const SelectMonth = ({ value, onChange, currentYear }) => {
  let months = Localization.months.map((item, index) => (
    <option key={item} value={index}>
      {item}
    </option>
  ));
  if (currentYear) {
    months = months.slice(0, new Date().getMonth() + 1);
  }
  return (
    <HTMLSelect value={value} onChange={onChange}>
      {months}
    </HTMLSelect>
  );
};

SelectMonth.defaultProps = {
  currentYear: false
};

SelectMonth.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  currentYear: PropTypes.bool
};

export default SelectMonth;
