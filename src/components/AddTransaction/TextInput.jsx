import React from "react";
import PropTypes from "prop-types";

class TextInput extends React.Component {
  handleChange = e => {
    const { onChange, name } = this.props;
    onChange(e.target.value, name);
  };

  render() {
    const { name, desc, value } = this.props;
    return (
      <p>
        <label htmlFor={name}>
          {desc}
          <input
            type="text"
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

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
export default TextInput;
