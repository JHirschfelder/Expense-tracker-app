import React from 'react'


class DataEntry extends React.Component {
  constructor() {
    super()
    this.state = {
      expensename: "",
      date: "",
      expensetype: "",
      amount: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    
    return (
      <form>
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
              <option value="debit">Debit</option>
              <option value="credit">Credit</option>
              <option value="cash">Cash</option>
              <option value="crypto">Crypto</option>
              <option value="other">Other</option>
          </select>
  
        <span>Amount:</span>
          <input 
            type="number" 
            value={this.state.amount} 
            name="amount" 
            placeholder="0.00"
            onChange={this.handleChange}
          />
          <h1>{this.state.expensename} {this.state.date} {this.state.expensetype} {this.state.amount}</h1>
      </form>
    )

  }
}

export default DataEntry