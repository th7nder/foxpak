import React from "react";
import PropTypes from "prop-types";

const Transaction = ({ data }) => {
  const { date, ...restProps } = data;
  return (
    <tr>
      <td>{date.toLocaleDateString()}</td>
      {Object.keys(restProps).map(key => (
        <td key={key}>{data[key]}</td>
      ))}
    </tr>
  );
};

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
  }).isRequired
};

export default Transaction;
