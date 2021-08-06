import React from 'react'


class DataEntry extends React.Component {

  render() {
    
    return (
      <div>
        <span>Expense name:</span>
          <input type="text" name="expense-name" placeholder="Enter reference name"/>
  
        <span>Date:</span>
          <input type="date" name="date"/>
  
        <span>Expense type:</span>
          <select name="expense-type">
            <option value="debit">Debit</option>
            <option value="credit">Credit</option>
            <option value="cash">Cash</option>
            <option value="crypto">Crypto</option>
            <option value="other">Other</option> bgtyh
          </select>
  
        <span>Amount:</span>
          <input type="number" name="expense-amount" placeholder="0.00"/>
      </div>
    )

  }
}

/*function CreateNewItem() {
  return (
    <div>
      
    </div>
  )
}*/

//export default CreateNewItem
export default DataEntry