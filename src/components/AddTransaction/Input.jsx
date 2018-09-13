import React from "react";
import PropTypes from "prop-types";

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
    const { name, desc, value, type } = this.props;
    return (
      <p>
        <label htmlFor={name}>
          {desc}
          <input
            type={type}
            name={name}
            id={name}
            value={value}
            onChange={this.handleChange}
          />
        </label>
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
