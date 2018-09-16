import React from "react";
import { Navbar, Alignment } from "@blueprintjs/core";
import TransactionsTable from "./TransactionsTable";
import AddTransaction from "./AddTransaction/AddTransaction";
import SelectMonth from "./SelectMonth";
import "./App.less";

const initialState = {
  transactions: [],
  month: new Date()
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

  handleMonthChange = e => {
    const { value } = e.target;
    this.setState(previousState => ({
      month: new Date(previousState.month.getYear(), Number(value))
    }));
  };

  render() {
    const { transactions, month } = this.state;
    return (
      <div>
        <header>
          <Navbar fixedToTop>
            <Navbar.Group align={Alignment.LEFT}>
              <Navbar.Heading>Foxpak</Navbar.Heading>
              <Navbar.Divider />
            </Navbar.Group>
            <Navbar.Group align={Alignment.RIGHT}>
              <SelectMonth
                value={month.getMonth()}
                onChange={this.handleMonthChange}
              />
            </Navbar.Group>
          </Navbar>
        </header>

        <div className="container">
          <main>
            <TransactionsTable
              month={month.getMonth()}
              transactions={transactions}
            />
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
