import React from 'react'


class InputItemFormat extends React.Component {
  render() {
    return (
      <div className="form-group row text-end justify-content-center" >
      <label className="col-sm-2 col-form-label" style={{color: "#6CB4EE"}}>
        {this.props.labelName}
      </label>
        <div className="col-sm-6">
            {this.props.formItem}
        </div>
    </div>
    )
  }
}

export default InputItemFormat