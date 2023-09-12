import React, { Component } from 'react'

export default class index1 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

  render() {
    const {count} = this.state;
    return (
      <div>
        <h1>Count: {count} [Using Class Component with setState]</h1>
        <button className = "my-1" onClick={this.handleClick}>Increment</button>
      </div>
    )
  }
}