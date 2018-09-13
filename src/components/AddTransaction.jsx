import React, { Component } from "react";
import PropTypes from "prop-types";

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

  handleChange(value, prop) {
    this.setState({ [prop]: value });
  }

  render() {
    const { onAddTransaction } = this.props;
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          onAddTransaction({ ...this.state, id: nextItemId });
          nextItemId += 1;
          this.setState(initialState);
        }}
      >
        {formFields.map(item => {
          const { [item.name]: value } = this.state;

          return (
            <p key={item.name}>
              <label htmlFor={item.name}>
                {item.desc}
                <input
                  type={item.name}
                  name={item.name}
                  id={item.name}
                  onChange={e => {
                    this.handleChange(e.target.value, item.name);
                  }}
                  value={value}
                />
              </label>
            </p>
          );
        })}
        <button type="submit">Dodaj transakcje</button>
      </form>
    );
  }
}
AddTransaction.propTypes = {
  onAddTransaction: PropTypes.func.isRequired
};

export default AddTransaction;
