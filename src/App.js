import React from 'react'

import './App.css'
//import Header from "./Header"
import DataEntry from "./DataEntry"
import DataTable from "./DataTable"


function App() {
  return (
    <div>
      <div>JHirschfelder Expense Tracker</div>
      <DataEntry />
      <DataTable />
    </div>
  )
}

export default App;