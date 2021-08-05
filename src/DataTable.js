import React from "react"

import ExpenseLine from "./ExpenseLine"

function DataTable() {

  let RawExpenseData=[
    {id:1, name:"myexpense", date:"01/07/1995", type:"cash", amount:"50"},
    {id:2, name:"anotherexpense", date:"08/17/2016", type:"credit", amount:"600.54"}
  ]

  const ExpenseComponents = RawExpenseData.map(expense => <ExpenseLine key={expense.id} name={expense.name} date={expense.date} type={expense.type} amount={expense.amount}/>)



  return (
    <div>
      {ExpenseComponents}
    </div>
  )
}

export default DataTable