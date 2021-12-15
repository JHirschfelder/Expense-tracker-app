import React from 'react'
import RenderTable from "./RenderTable"
import update from 'react-addons-update';

/*
pass array to render table
*/

let expenseArray = []

class DataEntry extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        input: {
          idcounter: Math.random(),
          expensename: "",
          date: "",
          expensetype: "",
          amount: "",
        }
      }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState(update(this.state, {
      input: {
        [event.target.name]: {
          $set: event.target.value
        }
      }
    }))
  }

  handleSubmit = event => {
    event.preventDefault()
    const NewLineItem = [this.state.input]
    
    if (NewLineItem.some(this.checkForBlanks)!== false) {
      alert ("Please complete all value fields")
    }

    expenseArray.push(NewLineItem)

    console.log(expenseArray)
    
    this.clearFields ()
  }
  
  checkForBlanks (item) {
    return item === ""
  }

  clearFields () {
      this.setState({ input: {
          idcounter: Math.random(),
          expensename: "",
          date: "",
          expensetype: "",
          amount: "",
        } })
   }


  render() {
    
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <label>Expense name:</label>
          <input 
            type="text" 
            value={this.state.input.expensename} 
            name="expensename" 
            placeholder="Enter reference name"
            onChange={this.handleChange}
            className="form-control"
            />
  
        <label>Date:</label>
          <input 
            type="date" 
            value={this.state.input.date} 
            name="date"
            onChange={this.handleChange}
            className="form-control"
          />
  
        <label>Expense type:</label>
          <select 
            value={this.state.input.expensetype}
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
            value={this.state.input.amount} 
            name="amount" 
            placeholder="0.00"
            onChange={this.handleChange}
            className="form-control"
          />
          <h1>{this.state.input.idcounter} {this.state.input.expensename} {this.state.input.date} {this.state.input.expensetype} {this.state.input.amount}</h1>
          <button type="submit" className="btn-primary">Enter</button>

          

      </form>

      <h2>Recent Expenses</h2>
      <RenderTable expenses={expenseArray}/>

    </>
    )

  }
}


export default DataEntry