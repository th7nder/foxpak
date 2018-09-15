import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormGroup, InputGroup } from "@blueprintjs/core";
import LocalizedDateInput from "./LocalizedDateInput";

const formFields = [
  { name: "company", desc: "Firma" },
  { name: "dimensions", desc: "Wymiary" },
  { name: "amount", desc: "Ilość", type: "number" },
  { name: "grossMargin", desc: "Marża", type: "number" },
  { name: "revenue", desc: "Zysk", type: "number" },
  { name: "sum", desc: "Suma", type: "number" }
];

const initialState = {
  date: new Date(),
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

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup label="Data" labelFor="date">
          <LocalizedDateInput />
        </FormGroup>
        <button type="submit">Dodaj transakcje</button>
      </form>
    );
  }
}

AddTransaction.propTypes = {
  onAddTransaction: PropTypes.func.isRequired
};

export default AddTransaction;
