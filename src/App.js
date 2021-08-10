/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from "prop-types"

class App extends React.Component {
  //state에 바꾸고 싶은 data를 넣는다
  state = {//state는 object 이고, component의 data를 넣을 공간이 있다. 이 데이터는 변한다.(변수)
    count: 0
  };
  add = () => {
    //console.log("add");
    //this.state.count = 1;//react는 render function을 refresh 하지 않기때문에 이상태로는 동작하지 않음 (state의 상태를 변경할 때 react가 render function을 호출해서 바꿔주길 원함)
    //this.setState({ count: 1 });
    //this.setState({ count: this.state.count + 1 });//최신의 count+1, 기능은 하지만 멋진상태는 아님
    this.setState(current => ({count: current.count +1}));//react 외부의 상태에 의존하지 않는 가장 좋은 방법
  };
  minus = () => {
    //console.log("minus");
    //this.state.count = -1;// state와 함께 render function이 호출되지 않음 >> setState()가 필요한 이유
    //this.setState({ count: -1 });
    //this.setState({ count: this.state.count - 1});
    //* setState()를 호출할 때 마다 react는 새로운 state와 함께 render functiond을  호출한다
    this.setState(current => ({count: current.count - 1}));
  };
  render() {
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
