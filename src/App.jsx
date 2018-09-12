import React from "react";
import Table from "./Table";
import AddItem from "./AddItem";

const App = () => (
  <div>
    <h1>
      <span>Foxpak</span>
    </h1>
    <main>
      <AddItem />
      <Table />
    </main>
  </div>
);

export default App;
