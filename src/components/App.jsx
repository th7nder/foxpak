import React from "react";
import { H1 } from "@blueprintjs/core";
import TransactionsTable from "./TransactionsTable";
import AddTransaction from "./AddTransaction/AddTransaction";
import "./App.less";

const initialState = {
  transactions: []
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleAddTransaction = itemData => {
    this.setState(previousState => ({
      transactions: [...previousState.transactions, itemData]
    }));
  };

  render() {
    const { transactions } = this.state;
    return (
      <div>
        <header>
          <H1>Foxpak</H1>
        </header>

        <div className="container">
          <main>
            <TransactionsTable transactions={transactions} />
          </main>
          <aside>
            <AddTransaction onAddTransaction={this.handleAddTransaction} />
          </aside>
        </div>
      </div>
    );
  }
}

export default App;
