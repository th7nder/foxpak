import React from "react";

const AddItem = () => (
  <form onSubmit={e => e.preventDefault()}>
    <label htmlFor="date">
      Data
      <input type="date" name="date" id="date" />
    </label>

    <label htmlFor="company">
      Firma
      <input type="text" name="company" id="company" />
    </label>

    <label htmlFor="dimensions">
      Wymiar
      <input type="text" name="dimensions" id="dimensions" />
    </label>

    <label htmlFor="amount">
      Ilość
      <input type="text" name="amount" id="amount" />
    </label>

    <label htmlFor="grossMargin">
      Marża
      <input type="text" name="grossMargin" id="grossMargin" />
    </label>

    <label htmlFor="revenue">
      Zysk
      <input type="text" name="revenue" id="revenue" />
    </label>

    <label htmlFor="sum">
      Suma
      <input type="text" name="sum" id="sum" />
    </label>

    <button type="submit">Dodaj transakcje</button>
  </form>
);

export default AddItem;
