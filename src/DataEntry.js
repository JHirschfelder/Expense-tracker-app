import React from 'react'
//import CreateNewItem from './CreateNewItem'
//import DataTable from './DataTable'
 


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
          <button type="submit" className="btn btn-primary">Enter</button>

          <DataTable />
      </form>
    )

  }
}

class DataTable extends React.Component {

  render() {

    let RawExpenseData=[
      {id:1, name:"myexpense", date:"01/07/1995", type:"cash", amount:"50"},
      {id:2, name:"anotherexpense", date:"08/17/2016", type:"credit", amount:"600.54"},
      {id:3, name:"yetanotherexpense", date:"08/17/2016", type:"debit", amount:"69.69"}
    ]
  
    const ExpenseComponents = RawExpenseData.map(expense => 
      <ExpenseLine key={expense.id} name={expense.name} date={expense.date} type={expense.type} amount={expense.amount}/>)
    

    return (
      <div>
        {ExpenseComponents}
      </div>
    )
  }
  
}

class ExpenseLine extends React.Component { 

  render() {

    return (
      <div>
          <p>{this.props.name}</p>
          <p>{this.props.date}</p>
          <p>{this.props.type}</p>
          <p>${this.props.amount}</p>
      </div>
    )
  }
}


export default DataEntry