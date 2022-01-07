import React from 'react'
import update from 'react-addons-update';

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

    this.props.createExpense(this.state.input)
    
    //localStorage.setItem("my_expenses", JSON.stringify(this.state.expenseArray))

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

  render() {

    //localStorage.setItem("my_expenses", JSON.stringify(this.state.expenseArray))

    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group row text-end justify-content-center" >
          <label className="col-sm-2 col-form-label" style={{color: "#6CB4EE"}}>Expense name:</label>
            <div className="col-sm-6">
                <input 
                  type="text" 
                  value={this.state.input.name} 
                  name="name" 
                  placeholder="Enter reference name"
                  onChange={this.handleChange}
                  className="form-control"
                  required
                  />
            </div>
        </div>
                
        <div className="form-group row text-end justify-content-center">
          <label className="col-sm-2 col-form-label" style={{color: "#6CB4EE"}}>Date:</label>
            <div className="col-sm-6">
              <input 
                type="date" 
                value={this.state.input.date} 
                name="date"
                onChange={this.handleChange}
                className="form-control"
                required
              />
            </div>
        </div>

        <div className="form-group row text-end justify-content-center">
          <label className="col-sm-2 col-form-label" style={{color: "#6CB4EE"}}>Expense type:</label>
            <div className="col-sm-6">
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
            </div>
        </div>

        <div className="form-group row text-end justify-content-center">
          <label className="col-sm-2 col-form-label" style={{color: "#6CB4EE"}}>Amount:</label>
            <div className="col-sm-6">
              <input 
                type="number" 
                value={this.state.input.amount} 
                name="amount" 
                placeholder="0.00"
                onChange={this.handleChange}
                className="form-control"
                required
              />
            </div>
        </div>
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