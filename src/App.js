import React from 'react';
import DataEntry from "./Components/DataEntry"
import background from "./images/background.jpg"

class App extends React.Component {

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
      <>
        <div style={backgroundImage}>
          <div 
          className="container"
          style={backgoundLayer}
          >
            <br/>
            <h1 className="text-center" style={{color:"#6CB4EE"}}>JHirschfelder Expense Tracker</h1>
            <br/>
            <DataEntry />
          </div>
        </div>
      </>
    )

  }
}

export default App