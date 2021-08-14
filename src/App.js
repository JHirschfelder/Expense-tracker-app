import React from 'react'

import './App.css'
import DataEntry from "./DataEntry"
import DataTable from "./DataTable"
import CreateNewItem from "./CreateNewItem"


class App extends React.Component {

  render() {
    
    return (
      <div>
        <div>JHirschfelder Expense Tracker</div>
        <DataEntry />
        <CreateNewItem />
        <DataTable />
      </div>
    )

  }
}

export default App;