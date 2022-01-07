import React from 'react'
import update from 'react-addons-update';
import InputItemFormat from './InputFormat';

class DataEntry extends React.Component {

  constructor(props) {
    super(props)
      this.state = {
        input: {
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

    const expense = {
      id: Math.random(), 
      ...this.state.input
    }
    this.props.createExpense(expense)

    this.clearFields ()
  }

  clearFields () {
      this.setState({ input: {
          name: "",
          date: "",
          type: "",
          amount: "",
        } })
   }

  render() {

    const nameInput = (      
      <input 
        type="text" 
        value={this.state.input.name} 
        name="name" 
        placeholder="Enter reference name"
        onChange={this.handleChange}
        className="form-control"
        required
      />
    )

    const dateInput = (
      <input 
        type="date" 
        value={this.state.input.date} 
        name="date"
        onChange={this.handleChange}
        className="form-control"
        required
      />
    )

    const typeInput = (
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
    )

    const amountInput = (
      <input 
        type="number" 
        value={this.state.input.amount} 
        name="amount" 
        placeholder="0.00"
        onChange={this.handleChange}
        className="form-control"
        required
      />
    )



    return (
      <>
      <form onSubmit={this.handleSubmit}>

        <InputItemFormat labelName = {"Expense name"} formItem = {nameInput}/>

        <InputItemFormat labelName = {"Date"} formItem={dateInput}/>

        <InputItemFormat labelName = {"Expense type"} formItem={typeInput}/>

        <InputItemFormat labelName = {"Amount"} formItem={amountInput}/>

        <br/>

        <div class="row justify-content-center">
          <div class="col-sm-6 offset-sm-2">
            <button type="submit" className="btn-primary">Enter</button>
          </div>
        </div>

          

      </form>


    </>
    )

  }
}

export default DataEntry