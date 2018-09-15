import React, { Component } from "react";
import { NumericInput, FormGroup } from "@blueprintjs/core";
import PropTypes from "prop-types";

class NumericInputWrapper extends Component {
  handleValueChange = valueAsNumber => {
    const { name, onChange } = this.props;
    onChange(name, valueAsNumber);
  };

  render() {
    const { name, desc, value } = this.props;
    return (
      <FormGroup label={desc} labelFor={name}>
        <NumericInput
          buttonPosition="none"
          id={name}
          value={value}
          onValueChange={this.handleValueChange}
          required
        />
      </FormGroup>
    );
  }
}

NumericInputWrapper.defaultProps = {
  value: null
};

NumericInputWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number
};

export default NumericInputWrapper;
