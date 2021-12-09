import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import ReactDOM from 'react-dom';
import DataEntry from "./Components/DataEntry"
import RenderTable from "./Components/RenderTable"

class App extends React.Component {

  render() {
    
    return (
      <div className="container" styles="margin-top:50px;">
        <h1>JHirschfelder Expense Tracker</h1>
        <DataEntry />

        <h2>Recent Expenses</h2>
          <RenderTable />

      </div>
    )

  }
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);