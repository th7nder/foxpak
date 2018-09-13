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

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleChange(value, prop) {
    this.setState({ [prop]: value });
  }

  render() {
    const { onAddItem } = this.props;
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          onAddItem(this.state);
          this.setState(initialState);
        }}
      >
        {formFields.map(item => {
          const { [item.name]: value } = this.state;

          return (
            <p>
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
AddItem.propTypes = {
  onAddItem: PropTypes.func.isRequired
};

export default AddItem;
