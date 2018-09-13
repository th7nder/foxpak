import React from "react";

const AddItem = () => (
  <form onSubmit={e => e.preventDefault()}>
    {[
      { name: "date", desc: "Data" },
      { name: "company", desc: "Firma" },
      { name: "dimensions", desc: "Wymiary" },
      { name: "amount", desc: "Ilość" },
      { name: "grossMargin", desc: "Marża" },
      { name: "revenue", desc: "Zysk" },
      { name: "sum", desc: "Suma" }
    ].map(item => (
      <p>
        <label htmlFor={item.name}>
          {item.desc}
          <input type={item.name} name={item.name} id={item.name} />
        </label>
      </p>
    ))}
    <button type="submit">Dodaj transakcje</button>
  </form>
);

export default AddItem;
