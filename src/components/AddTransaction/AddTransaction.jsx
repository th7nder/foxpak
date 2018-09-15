import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormGroup, InputGroup } from "@blueprintjs/core";
import LocalizedDateInput from "./LocalizedDateInput";
import NumericInputWrapper from "./NumericInputWrapper";

const inputs = {
  numeric: [
    { name: "amount", desc: "Ilość" },
    { name: "grossMargin", desc: "Marża" },
    { name: "revenue", desc: "Zysk" },
    { name: "sum", desc: "Suma" }
  ],
  text: [
    { name: "company", desc: "Firma" },
    { name: "dimensions", desc: "Wymiary" }
  ]
};

const initialState = {
  date: new Date(),
  company: "Skyhorn",
  dimensions: "4x2x0",
  amount: 30,
  grossMargin: 0.45,
  revenue: 100,
  sum: 300
};

let nextItemId = 0;

class AddTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleSubmit = e => {
    const { onAddTransaction } = this.props;
    e.preventDefault();
    onAddTransaction({ ...this.state, id: nextItemId });
    nextItemId += 1;
    this.setState(initialState);
  };

  handleTextChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleNumericChange = (prop, value) => {
    this.setState({ [prop]: value });
  };

  handleDateChange = selectedDate => this.setState({ date: selectedDate });

  renderTextInput = item => {
    const { [item.name]: value } = this.state;
    return (
      <FormGroup key={item.name} label={item.desc} labelFor={item.name}>
        <InputGroup
          id={item.name}
          name={item.name}
          onChange={this.handleTextChange}
          value={value}
          required
        />
      </FormGroup>
    );
  };

  renderNumericInput = item => {
    const { [item.name]: value } = this.state;
    return (
      <NumericInputWrapper
        key={item.name}
        name={item.name}
        desc={item.desc}
        onChange={this.handleNumericChange}
        value={value}
      />
    );
  };

  renderInputs() {
    return [
      ...inputs.text.map(this.renderTextInput),
      ...inputs.numeric.map(this.renderNumericInput)
    ];
  }

  render() {
    const { date } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup label="Data" labelFor="date">
          <LocalizedDateInput
            id="date"
            onChange={this.handleDateChange}
            value={date}
          />
        </FormGroup>
        {this.renderInputs()}
        <button type="submit">Dodaj transakcje</button>
      </form>
    );
  }
}

AddTransaction.propTypes = {
  onAddTransaction: PropTypes.func.isRequired
};

export default AddTransaction;
