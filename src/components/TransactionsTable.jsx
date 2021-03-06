import React from "react";
import PropTypes from "prop-types";
import { HTMLTable } from "@blueprintjs/core";
import Transaction from "./Transaction";
import "./TransactionsTable.less";

const TransactionsTable = ({
  transactions,
  month,
  year,
  onDeleteTransaction
}) => (
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
        <th>Akcja</th>
      </tr>
    </thead>
    <tbody>
      {transactions
        .filter(
          transaction =>
            transaction.date.getMonth() === month &&
            transaction.date.getFullYear() === year
        )
        .map(transaction => (
          <Transaction
            key={transaction.id}
            data={transaction}
            onDeleteTransaction={onDeleteTransaction}
          />
        ))}
      <tr className="sum-row">
        <td colSpan="6">Całkowity zysk: </td>
        <td colSpan="2" className="sum">
          {transactions
            .filter(
              transaction =>
                transaction.date.getMonth() === month &&
                transaction.date.getFullYear() === year
            )
            .reduce((accumulator, curr) => accumulator + curr.revenue, 0).toFixed(2)}
        </td>
      </tr>
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
    })
  ).isRequired,
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  onDeleteTransaction: PropTypes.func.isRequired
};

export default TransactionsTable;
