import React, { Component } from 'react'

export default class Index extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
      this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState({
            count: this.state.count + 1
        })
    }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick.bind(this)}>click me</button>
        {/* OR  Binding inside the Constructor*/}
        <button onClick={this.handleClick}>click me</button>
      </div>
    )
  }
}
