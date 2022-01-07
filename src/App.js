import React from 'react';
import DataEntry from "./Components/DataEntry"
import RenderTable from "./Components/RenderTable"
import background from "./images/background.jpg"

class App extends React.Component {

  constructor(props) {
    super(props)
      this.state= {
        expenseArray: []
      }
  }

  componentDidMount() {
    const savedExpenses = JSON.parse(localStorage.getItem('my_expenses')) || []
    this.setState({ expenseArray: savedExpenses })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.expenseArray.length !== this.state.expenseArray.length) {
      localStorage.setItem("my_expenses", JSON.stringify(this.state.expenseArray))
    }
  }

  handleDelete = expenseId => {
    const expenses = this.state.expenseArray.filter(expense => expense.id !== expenseId);
    this.setState({ expenseArray: expenses });
  };

  createExpense = expense => {
    this.setState ((prevState) => {
      return {
        expenseArray: [expense, ...prevState.expenseArray]
      }
    })
  }


  render() {
    const backgroundImage = {
      backgroundImage: `url(${background})`,
      height:'100vh',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }

    const backgoundLayer = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 10,
      right: 10,
      backgroundColor: 'rgba(52, 52, 52, 0.6)'
    }
  
    return (
        <div style={backgroundImage}>
          <div 
          className="container"
          style={backgoundLayer}
          >
            <br/>
            <h1 className="text-center" style={{color:"#6CB4EE"}}>JHirschfelder Expense Tracker</h1>
            <br/>

            <DataEntry createExpense={this.createExpense}/>

            <br/>
            <h3 className="text-center" style={{color:"#6CB4EE"}}>Recent Expenses</h3>
            <br/>

            <RenderTable expense={this.state.expenseArray} handleDelete={this.handleDelete}/>
          </div>
        </div>
    )

  }
}

export default App