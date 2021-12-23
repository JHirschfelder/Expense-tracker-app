import React from 'react'
import Button from 'react-bootstrap/Button'

class RenderTable extends React.Component {

  render() {

    const ExpenseComponents = this.props.expense.map(expense => 
      <ExpenseLine key={expense.id} lineID={expense.id} name={expense.name} date={expense.date} type={expense.type} amount={expense.amount} onDelete={this.props.handleDelete}/>)
    
    return (
        <table className="table table-striped table-dark">
          <thead>
            <tr>
                <th>Item</th>
                <th>Date</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Delete</th>
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
      <tr>
          <td style={{flexWrap: 'wrap'}}>{this.props.name}</td>
          <td>{this.props.date}</td>
          <td>{this.props.type}</td>
          <td>${this.props.amount}</td>
          <td><Button
              variant="outline-danger"
              size="sm"
              onClick={() => this.props.onDelete(this.props.lineID)}
            >X</Button></td>
      </tr>
    )
  }
}

export default RenderTable