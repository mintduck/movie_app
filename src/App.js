/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from "prop-types"

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log("hello");
  }

  state = {
    count: 0
  };
  
  add = () => {

    this.setState(current => ({count: current.count +1}));//react 외부의 상태에 의존하지 않는 가장 좋은 방법
  };
  
  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  };
  
componentDidMount() {
  console.log("component rended");
}

componentDidUpdate() {
  console.log("i just updated");
}

componentWillUnmount() {
  console.log("Goodbye, cruel world");
}

  render() {
    console.log("I am rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;
