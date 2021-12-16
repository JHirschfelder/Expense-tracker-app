import React from 'react'

class RenderTable extends React.Component {


  render() {
  
    const ExpenseComponents = this.props.expense.map(expense => 
      <ExpenseLine key={expense.id} name={expense.name} date={expense.date} type={expense.type} amount={expense.amount}/>)
    
    return (
        <table className="table">
          <thead>
            <tr>
                <th>Item</th>
                <th>Date</th>
                <th>Type</th>
                <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {ExpenseComponents}
          </tbody>
        </table>
    )
  }
  
}

class ExpenseLine extends React.Component {
  render() {
    return (
      <tr key={this.props.key}>
          <td>{this.props.name}</td>
          <td>{this.props.date}</td>
          <td>{this.props.type}</td>
          <td>${this.props.amount}</td>
      </tr>
    )
  }
}

export default RenderTable