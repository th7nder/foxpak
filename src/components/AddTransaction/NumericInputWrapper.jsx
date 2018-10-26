import React, { Component } from "react";
import { NumericInput, FormGroup } from "@blueprintjs/core";
import PropTypes from "prop-types";

class NumericInputWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stringValue: null
    }
  }

  static getDerivedStateFromProps(props, state) {
    // ugly hack to allow entering ,. numbers via controlled components
    const { value } = props;
    if (state.stringValue === null) {
      return {
        stringValue: value.toString()
      };
    }

    return {};
  }

  handleValueChange = (valueAsNumber, valueAsString) => {
    const { name, onChange } = this.props;
    // ugly hack to allow entering ,. numbers via controlled components
    // 1. stores a valid input string in the state
    // 2. if currently received input is valid calls the onChange prop to pass the state up
    // 3. if it is not just rerender the previous input to remove a unwanted character
    const regEx = /^\d*[.]?\d{0,2}$/;
    if (regEx.test(valueAsString)) {
      onChange(name, parseFloat(valueAsString));
      this.setState({
        stringValue: valueAsString
      })
    } else {
      const { stringValue } = this.state;
      this.setState({
        stringValue
      });
    }
  };


  render() {
    const { name, desc } = this.props;
    const { stringValue } = this.state;
    return (
      <FormGroup label={desc} labelFor={name}>
        <NumericInput
          allowNumericCharactersOnly={false}
          buttonPosition="none"
          id={name}
          value={stringValue}
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
