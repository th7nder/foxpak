import React from "react";
import PropTypes from "prop-types";
import { HTMLTable } from "@blueprintjs/core";
import "./TransactionsTable.less";

const TransactionsTable = ({ transactions, month, year }) => (
  <HTMLTable striped>
    <thead>
      <tr>
        <th>Lp.</th>
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
      <tr className="first-row">
        <td colSpan="7">Suma wszystkich transakcji</td>
        <td className="sum">
          {transactions
            .filter(
              transaction =>
                transaction.date.getMonth() === month &&
                transaction.date.getFullYear() === year
            )
            .reduce((accumulator, curr) => accumulator + curr.sum, 0)}
        </td>
      </tr>
      {transactions
        .filter(
          transaction =>
            transaction.date.getMonth() === month &&
            transaction.date.getFullYear() === year
        )
        .map(transaction => (
          <tr key={transaction.id}>
            {Object.keys(transaction).map(
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
  ).isRequired,
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired
};

export default TransactionsTable;
