import React from "react";
import TransactionsTable from "./TransactionsTable";
import AddTransaction from "./AddTransaction/AddTransaction";

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
        <h1>
          <span>Foxpak</span>
        </h1>
        <main>
          <AddTransaction onAddTransaction={this.handleAddTransaction} />
          <TransactionsTable transactions={transactions} />
        </main>
      </div>
    );
  }
}

export default App;
