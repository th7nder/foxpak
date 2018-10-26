import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormGroup, InputGroup, Button } from "@blueprintjs/core";
import LocalizedDateInput from "./LocalizedDateInput";
import NumericInputWrapper from "./NumericInputWrapper";

const inputs = {
  numeric: [
    { name: "amount", desc: "Ilość" },
    { name: "grossMargin", desc: "Marża" },
    { name: "revenue", desc: "Zysk" },
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
};

class AddTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  static getDerivedStateFromProps(props, state) {
    // When user changes current selected data range update form
    // date for better UX
    const { year, month } = props;
    const { date } = state;

    const validDate =
      date.getMonth() === month && date.getFullYear() === year
        ? date
        : new Date(year, month, date.getDate());

    return {
      date: validDate
    };
  }

  handleSubmit = e => {
    const { onAddTransaction } = this.props;
    const { date } = this.state;
    e.preventDefault();
    onAddTransaction(this.state);
    this.setState({ ...initialState, date });
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
    const { year, month } = this.props;
    const maxDate = new Date(
      year,
      month,
      new Date(year, month + 1, 0).getDate()
    );
    const minDate = new Date(year, month, 1);
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup label="Data" labelFor="date">
          <LocalizedDateInput
            minDate={minDate}
            maxDate={maxDate}
            id="date"
            onChange={this.handleDateChange}
            value={date}
          />
        </FormGroup>
        {this.renderInputs()}
        <Button type="submit" icon="add">
          Dodaj transakcje
        </Button>
      </form>
    );
  }
}

AddTransaction.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  onAddTransaction: PropTypes.func.isRequired
};

export default AddTransaction;
