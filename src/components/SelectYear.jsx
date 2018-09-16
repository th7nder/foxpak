import React from "react";
import PropTypes from "prop-types";
import { HTMLSelect } from "@blueprintjs/core";

const SelectYear = ({ value, onChange }) => (
  <HTMLSelect value={value} onChange={onChange}>
    <option value="2017">2017</option>
    <option value="2018">2018</option>
  </HTMLSelect>
);

SelectYear.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SelectYear;
