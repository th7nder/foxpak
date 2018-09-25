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
  year: new Date().getFullYear()
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
      const transactions = [...previousState.transactions, itemData];
      const state = { ...this.state, transactions };

      localStorage.setItem("state", JSON.stringify(state));
      return {
        transactions
      };
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
