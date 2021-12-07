import React from 'react';
import ReactDOM from 'react-dom';
import DataEntry from "./DataEntry"
//import DataTable from "./DataTable"
//import CreateNewItem from "./CreateNewItem"

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


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);