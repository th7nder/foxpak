import React, { Component } from "react";
import PropTypes from "prop-types";

class Transaction extends Component {
  handleDelete = () => {
    const { data, onDeleteTransaction } = this.props;
    const { id } = data;
    onDeleteTransaction(id);
  };

  render() {
    const { data } = this.props;
    const { date, ...restProps } = data;
    return (
      <tr>
        <td>{date.toLocaleDateString()}</td>
        {Object.keys(restProps).map(key => (
          <td key={key}>{restProps[key]}</td>
        ))}
        <td>
          <button type="submit" onClick={this.handleDelete}>
            Usuń
          </button>
        </td>
      </tr>
    );
  }
}

Transaction.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.instanceOf(Date),
    company: PropTypes.string.isRequired,
    dimensions: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    grossMargin: PropTypes.number.isRequired,
    revenue: PropTypes.number.isRequired,
    sum: PropTypes.number.isRequired
  }).isRequired,
  onDeleteTransaction: PropTypes.func.isRequired
};

export default Transaction;
