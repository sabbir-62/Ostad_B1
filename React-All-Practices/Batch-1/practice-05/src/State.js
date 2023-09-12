import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class State extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleDecrement = () => {
        this.setState({
            count : this.state.count -1
        })
    }


  render() {
    let {count} = this.state;
    return (
      <div className="text-center">
        <h1>{count}</h1>
        <div>
            <Button  onClick={this.handleIncrement} disabled = {count === 10 ? true : false}>+</Button>
            <Button className = "m-2 btn-secondary" onClick={this.handleDecrement} disabled = {count === 0 ? true : false}>-</Button>
        </div>
      </div>
    )
  }
}