import React from 'react'
import RenderTable from "./RenderTable"
import update from 'react-addons-update';
import { Alert } from 'bootstrap';

/*
Task list:
  add delete button to each line
  implement saving
  styling
*/


class DataEntry extends React.Component {

  constructor(props) {
    super(props)
      this.state = {
        input: {
          id: Math.random(),
          name: "",
          date: "",
          type: "Debit",
          amount: "",
        },

        expenseArray: []
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

    this.setState((prevState) => {
      return { expenseArray: [this.state.input, ...prevState.expenseArray]
      }
    })
    
    this.clearFields ()
  }
  
  checkForBlanks (item) {
    return item === ""
  }

  clearFields () {
      this.setState({ input: {
          id: Math.random(),
          name: "",
          date: "",
          type: "Debit",
          amount: "",
          delete: <button>X</button>,
        } })
   }

   handleDelete () {//= expenseId => {
     console.log("hello")
    //const expenses = this.state.expenseArray.filter(expense => expense.id !== expenseId);
    //this.setState({ expenseArray: expenses });
  };


  render() {
    
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <label>Expense name:</label>
          <input 
            type="text" 
            value={this.state.input.name} 
            name="name" 
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
            value={this.state.input.type}
            name="type"
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
          <br/>
          <button type="submit" className="btn-primary">Enter</button>

          

      </form>

      <h2>Recent Expenses</h2>

      <RenderTable 
        expense={this.state.expenseArray}
        handleDelete={this.handleDelete}
      />

    </>
    )

  }
}


export default DataEntry