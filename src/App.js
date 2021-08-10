/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

class App extends React.Component {

  state = {
    isLoading: true,
    movies: []
  };

  //이론적으로 componentDidMount에서 data를 fetch해보자
  //API로 부터 data fetching이 완료되면 "We are ready" 대신에 movie를 Rnder하고, map을 만들고 movie를 render 하자 
  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading:false});
    },5000)
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
