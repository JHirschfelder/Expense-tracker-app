import React from 'react';
import DataEntry from "./Components/DataEntry"

class App extends React.Component {

  render() {
    
    return (
      <div className="container" styles="margin-top:50px;">
        <h1>JHirschfelder Expense Tracker</h1>
        <DataEntry />

      </div>
    )

  }
}

export default App