import React from 'react';
import ReactDOM from 'react-dom';
//import DataEntry from "./DataEntry"
import DataTable from "./DataTable"
import CreateNewItem from "./CreateNewItem"

class App extends React.Component {

  render() {
    
    return (
      <div class="container" styles="margin-top:50px;">
        <h1>JHirschfelder Expense Tracker</h1>
        <DataEntry />
        <CreateNewItem />
        <DataTable />
      </div>
    )

  }
}

class DataEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      idcounter: 1,
      expensename: "",
      date: "",
      expensetype: "",
      amount: "",
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit() {
    const NewLineItem = [this.state.expensename, this.state.date, this.state.expensetype, this.state.amount]
    console.log(NewLineItem)
  }

  render() {
    
    return (
      <form onSubmit={this.handleSubmit}>
        <span>Expense name:</span>
          <input 
            type="text" 
            value={this.state.expensename} 
            name="expensename" 
            placeholder="Enter reference name"
            onChange={this.handleChange}
          />
  
        <span>Date:</span>
          <input 
            type="date" 
            value={this.state.date} 
            name="date"
            onChange={this.handleChange}
          />
  
        <span>Expense type:</span>
          <select 
            value={this.state.expensetype}
            name="expensetype"
            onChange={this.handleChange}
          >
              <option value="Debit">Debit</option>
              <option value="Credit">Credit</option>
              <option value="Cash">Cash</option>
              <option value="Crypto">Crypto</option>
              <option value="Other">Other</option>
          </select>
  
        <span>Amount:</span>
          <input 
            type="number" 
            value={this.state.amount} 
            name="amount" 
            placeholder="0.00"
            onChange={this.handleChange}
          />
          <h1>{this.state.idcounter} {this.state.expensename} {this.state.date} {this.state.expensetype} {this.state.amount}</h1>
          <button type="button" onClick={this.handleSubmit}>Enter</button>
      </form>
    )

  }
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);