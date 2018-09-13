import React, { Component } from "react";
import { DateInput } from "@blueprintjs/datetime";

class FieldDate extends Component {
  static dateFormatter = {
    formatDate: date => date.toLocaleDateString(),
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
      <DateInput
        {...FieldDate.dateFormatter}
        onChange={this.handleChange}
        value={value}
      />
    );
  }
}

export default FieldDate;
