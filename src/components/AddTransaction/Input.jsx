import React from "react";
import PropTypes from "prop-types";
import { FormGroup, InputGroup } from "@blueprintjs/core";

class Input extends React.Component {
  handleChange = e => {
    const { onChange, name, type } = this.props;
    let { value } = e.target;
    if (type === "number") {
      value = Number(value);
    }
    onChange(value, name);
  };

  render() {
    const { name, desc, value } = this.props;
    return (
      <p>
        <FormGroup label={desc} labelFor={name}>
          <InputGroup id={name} onChange={this.handleChange} value={value} />
        </FormGroup>
      </p>
    );
  }
}
Input.defaultProps = {
  type: "text"
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string
};
export default Input;
