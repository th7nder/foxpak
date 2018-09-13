import React, { Component } from "react";
import PropTypes from "prop-types";
import Input from "./Input";

const formFields = [
  { name: "date", desc: "Data", type: "date" },
  { name: "company", desc: "Firma" },
  { name: "dimensions", desc: "Wymiary" },
  { name: "amount", desc: "Ilość", type: "number" },
  { name: "grossMargin", desc: "Marża", type: "number" },
  { name: "revenue", desc: "Zysk", type: "number" },
  { name: "sum", desc: "Suma", type: "number" }
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
      <Input
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
