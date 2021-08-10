/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from "prop-types"

class App extends React.Component{
  //state에 바꾸고 싶은 data를 넣는다
  state = {//state는 object 이고, component의 data를 넣을 공간이 있다. 이 데이터는 변한다.(변수)
    count: 0
  };
  add = () => {
    console.log("add");
  };
  minus = () => {
    console.log("minus");
  };
  render(){
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
