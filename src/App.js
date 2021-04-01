import React, { Component } from "react"

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }

  makeIncrementer = (amount) => () =>
      this.setState((prevState) => ({
      count: prevState.count + amount,
    }))

  increment = this.makeIncrementer(1)

  render() {
    return (
      <div>
        <p>How much natalie sucks: {this.state.count}</p>
        <button className="increment" onClick={this.increment}L>Increment count</button>
      </div>
      )
    }
} 

export default App
