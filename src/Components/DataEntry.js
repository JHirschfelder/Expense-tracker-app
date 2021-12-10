import React from 'react'

import RenderTable from "./RenderTable"

/*
expense array in state
make it an object
pass to array of expenses
pass array to render table
*/
 
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

  handleSubmit = event => {
    event.preventDefault()
    const NewLineItem = [this.state.idcounter, this.state.expensename, this.state.date, this.state.expensetype, this.state.amount]
    if (NewLineItem.some(this.checkForBlanks)!== false) {
      alert ("Please complete all value fields")
    }
    console.log(NewLineItem)
  }
  
  checkForBlanks (item) {
    return item === ""
  }

  render() {
    
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <label>Expense name:</label>
          <input 
            type="text" 
            value={this.state.expensename} 
            name="expensename" 
            placeholder="Enter reference name"
            onChange={this.handleChange}
            className="form-control"
            />
  
        <label>Date:</label>
          <input 
            type="date" 
            value={this.state.date} 
            name="date"
            onChange={this.handleChange}
            className="form-control"
          />
  
        <label>Expense type:</label>
          <select 
            value={this.state.expensetype}
            name="expensetype"
            onChange={this.handleChange}
            className="form-control"
          >
              <option value="Debit">Debit</option>
              <option value="Credit">Credit</option>
              <option value="Cash">Cash</option>
              <option value="Crypto">Crypto</option>
              <option value="Other">Other</option>
          </select>
  
        <label>Amount:</label>
          <input 
            type="number" 
            value={this.state.amount} 
            name="amount" 
            placeholder="0.00"
            onChange={this.handleChange}
            className="form-control"
          />
          <h1>{this.state.idcounter} {this.state.expensename} {this.state.date} {this.state.expensetype} {this.state.amount}</h1>
          <button type="submit" className="btn-primary">Enter</button>

          

      </form>

      <h2>Recent Expenses</h2>
      <RenderTable expenses={this.state}/>
            </>
    )

  }
}


export default DataEntry