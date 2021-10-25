import React from "react"


class DataTable extends React.Component {

  render() {

    let RawExpenseData=[
      {id:1, name:"myeaxpense", date:"01/07/1995", type:"cash", amount:"50"},
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

export default DataTable