import React from 'react'
import RenderTable from "./RenderTable"
import update from 'react-addons-update';

/*
Task list:
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
          type: "",
          amount: "",
        },

        expenseArray: JSON.parse(localStorage.getItem("my_expenses")) || []
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

    this.setState((prevState) => {
      return { expenseArray: [this.state.input, ...prevState.expenseArray]
      }
    })
    
    localStorage.setItem("my_expenses", JSON.stringify(this.state.expenseArray))
    console.log(localStorage.getItem("my_expenses"))

    this.clearFields ()
  }

  clearFields () {
      this.setState({ input: {
          id: Math.random(),
          name: "",
          date: "",
          type: "",
          amount: "",
        } })
   }

   handleDelete = expenseId => {
    const expenses = this.state.expenseArray.filter(expense => expense.id !== expenseId);
    this.setState({ expenseArray: expenses });
  };


  render() {

    localStorage.setItem("my_expenses", JSON.stringify(this.state.expenseArray))
    
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
            required
            />
  
        <label>Date:</label>
          <input 
            type="date" 
            value={this.state.input.date} 
            name="date"
            onChange={this.handleChange}
            className="form-control"
            required
          />
  
        <label>Expense type:</label>
          <select 
            value={this.state.input.type}
            name="type"
            onChange={this.handleChange}
            className="form-control"
            required
          >
              <option value="">Select Expense type</option>
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
            required
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