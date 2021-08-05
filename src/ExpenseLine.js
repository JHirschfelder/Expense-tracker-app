import React from "react"

function ExpenseLine(props) {
  return (
    <div>
        <p>{props.name}</p>
        <p>{props.date}</p>
        <p>{props.type}</p>
        <p>${props.amount}</p>
    </div>
  )
}

export default ExpenseLine