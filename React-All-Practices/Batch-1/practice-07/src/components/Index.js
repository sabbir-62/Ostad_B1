import React, { Component } from 'react'

export default class Index extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         changedValue: ""
      }
    }

    handleOnChange = (e) => {
       this.setState({
        changedValue: e.target.value
       },
       () => {
        console.log(e.target.value)
       })
    }

    handleClick = () => {
        alert("clicked")
    }

  render() {
    return (
      <div>
        <input type= "text" onChange={this.handleOnChange} />
        <button onClick={this.handleClick}>Click Me</button>
        <p>{this.state.changedValue}</p>
      </div>
    )
  }
}
