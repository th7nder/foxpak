import React, { Component } from "react";
import LocalizedDateInput from "./LocalizedDateInput";

class FieldDate extends Component {
  static dateFormatter = {
    formatDate: date => date.toLocaleDateString("pl-PL"),
    parseDate: str => new Date(str),
    placeholder: "D/M/YYYY"
  };

  handleChange = selectedDate => {
    const { onChange, name } = this.props;
    onChange(selectedDate, name);
  };

  render() {
    const { value } = this.props;
    return (
      <LocalizedDateInput
        {...FieldDate.dateFormatter}
        onChange={this.handleChange}
        value={value}
      />
    );
  }
}

export default FieldDate;
