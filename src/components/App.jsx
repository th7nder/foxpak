import React from "react";
import Table from "./Table";
import AddItem from "./AddItem";

const initialState = {
  transactions: []
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleAddItem = itemData => {
    this.setState(previousState => ({
      transactions: [...previousState.transactions, itemData]
    }));
  };

  render() {
    return (
      <div>
        <h1>
          <span>Foxpak</span>
        </h1>
        <main>
          <AddItem onAddItem={this.handleAddItem} />
          <Table />
        </main>
      </div>
    );
  }
}

export default App;
