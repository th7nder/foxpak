import React from "react";
import PropTypes from "prop-types";
import { HTMLTable } from "@blueprintjs/core";
import "./TransactionsTable.less";

const TransactionsTable = ({ transactions }) => (
  <HTMLTable striped>
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
          {Object.keys(transaction)
            .slice(0, -1)
            .map(
              key =>
                transaction[key] instanceof Date ? (
                  <td key={key + transaction.id}>
                    {transaction[key].toLocaleDateString()}
                  </td>
                ) : (
                  <td key={key + transaction.id}>{transaction[key]}</td>
                )
            )}
        </tr>
      ))}
    </tbody>
  </HTMLTable>
);

TransactionsTable.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      date: PropTypes.instanceOf(Date),
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
