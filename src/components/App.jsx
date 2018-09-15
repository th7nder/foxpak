import React from "react";
import { Navbar, Alignment } from "@blueprintjs/core";
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
          <Navbar fixedToTop>
            <Navbar.Group align={Alignment.LEFT}>
              <Navbar.Heading>Foxpak</Navbar.Heading>
              <Navbar.Divider />
            </Navbar.Group>
          </Navbar>
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
