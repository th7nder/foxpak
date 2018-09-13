import React from "react";

const Table = () => (
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
      {[...Array(30)].map(() => (
        <tr>
          <td>29.04.2018</td>
          <td>Skyhorn</td>
          <td>12x34x45</td>
          <td>30</td>
          <td>0.45</td>
          <td>381</td>
          <td>444</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
