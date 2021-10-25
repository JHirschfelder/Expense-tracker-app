import React from "react"
//import DataEntry from "./DataEntry"
//import DataTable from "./DataTable"

class CreateNewItem extends React.Component {
  constructor () {
    super()
    this.state = {
        count: 1
    }
  }


 
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
      </div>
    )
  }
}

export default CreateNewItem