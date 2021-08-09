import React from "react"

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


export default ExpenseLine