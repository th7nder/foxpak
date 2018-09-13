import React from "react";
import PropTypes from "prop-types";

const TransactionsTable = ({ transactions }) => (
  <table>
    <thead>
      <tr>
        <th>Data</th>
        <th>Firma</th>
        <th>Wymiar</th>
        <th>Ilość</th>
        <th>Marża</th>
        <th>Zysk</th>
        <th>Suma</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map(transaction => (
        <tr key={transaction.id}>
          {Object.keys(transaction).map(key => (
            <td key={key + transaction.id}>{transaction[key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionsTable.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      dimensions: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      grossMargin: PropTypes.number.isRequired,
      revenue: PropTypes.number.isRequired,
      sum: PropTypes.number.isRequired
    })
  ).isRequired
};

export default TransactionsTable;
