import React from "react";
import { Navbar, Alignment } from "@blueprintjs/core";
import TransactionsTable from "./TransactionsTable";
import AddTransaction from "./AddTransaction/AddTransaction";
import SelectMonth from "./SelectMonth";
import "./App.less";
import SelectYear from "./SelectYear";

const initialState = {
  transactions: [],
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
  nextTransactionId: 1
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state =
      JSON.parse(localStorage.getItem("state"), (key, value) => {
        if (key === "date") {
          return new Date(value);
        }

        return value;
      }) || initialState;
  }

  handleAddTransaction = itemData => {
    this.setState(previousState => {
      const newTransaction = {
        id: previousState.nextTransactionId,
        ...itemData
      };
      const transactions = [...previousState.transactions, newTransaction];
      const state = {
        ...previousState,
        transactions,
        nextTransactionId: previousState.nextTransactionId + 1
      };

      localStorage.setItem("state", JSON.stringify(state));
      return state;
    });
  };

  handleDeleteTransaction = transactionId => {
    this.setState(previousState => {
      const state = {
        ...previousState,
        transactions: previousState.transactions.filter(
          transaction => transactionId !== transaction.id
        )
      };

      localStorage.setItem("state", JSON.stringify(state));
      return state;
    });
  };

  handleMonthChange = e => {
    const { value } = e.target;
    this.setState({
      month: Number(value)
    });
  };

  handleYearChange = e => {
    const { value } = e.target;
    this.setState({
      year: Number(value)
    });
  };

  render() {
    const { transactions, month, year } = this.state;
    return (
      <div>
        <header>
          <Navbar fixedToTop>
            <Navbar.Group align={Alignment.LEFT}>
              <Navbar.Heading>Foxpak</Navbar.Heading>
              <Navbar.Divider />
            </Navbar.Group>
            <Navbar.Group align={Alignment.RIGHT}>
              <SelectYear value={year} onChange={this.handleYearChange} />
              <SelectMonth
                value={month}
                onChange={this.handleMonthChange}
                currentYear={new Date().getFullYear() === year}
              />
            </Navbar.Group>
          </Navbar>
        </header>

        <div className="container">
          <main>
            <TransactionsTable
              year={year}
              month={month}
              transactions={transactions}
              onDeleteTransaction={this.handleDeleteTransaction}
            />
          </main>
          <aside>
            <AddTransaction
              year={year}
              month={month}
              onAddTransaction={this.handleAddTransaction}
            />
          </aside>
        </div>
      </div>
    );
  }
}

export default App;
