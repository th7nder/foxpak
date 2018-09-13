import React, { Component } from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput";

const formFields = [
  { name: "date", desc: "Data" },
  { name: "company", desc: "Firma" },
  { name: "dimensions", desc: "Wymiary" },
  { name: "amount", desc: "Ilość" },
  { name: "grossMargin", desc: "Marża" },
  { name: "revenue", desc: "Zysk" },
  { name: "sum", desc: "Suma" }
];

const initialState = {
  date: "",
  company: "",
  dimensions: "",
  amount: "",
  grossMargin: "",
  revenue: "",
  sum: ""
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

  handleChange = (value, prop) => {
    this.setState({ [prop]: value });
  };

  renderFormFields = item => {
    const { [item.name]: value } = this.state;
    return (
      <TextInput
        key={item.name}
        {...item}
        value={value}
        onChange={this.handleChange}
      />
    );
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {formFields.map(this.renderFormFields)}
        <button type="submit">Dodaj transakcje</button>
      </form>
    );
  }
}

AddTransaction.propTypes = {
  onAddTransaction: PropTypes.func.isRequired
};

export default AddTransaction;
