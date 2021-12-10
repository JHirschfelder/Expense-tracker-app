import React from 'react'

class RenderTable extends React.Component {


  render(props) {
    console.log(props)
    let RawExpenseData=[
      {id:1, name:"myexpense", date:"08/07/2016", type:"cash", amount:"50"},
      {id:2, name:"anotherexpense", date:"08/17/2016", type:"credit", amount:"600.54"},
      {id:3, name:"yetanotherexpense", date:"08/17/2016", type:"debit", amount:"69.69"}
    ]
  
    const ExpenseComponents = RawExpenseData.map(expense => 
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
      <tr>
          <td>{this.props.name}</td>
          <td>{this.props.date}</td>
          <td>{this.props.type}</td>
          <td>${this.props.amount}</td>
      </tr>
    )
  }
}

export default RenderTable