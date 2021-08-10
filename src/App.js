/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import axios from "axios";

class App extends React.Component {

  state = {
    isLoading: true,
    movies: []
  };

  //이론적으로 componentDidMount에서 data를 fetch해보자
  //API로 부터 data fetching이 완료되면 "We are ready" 대신에 movie를 Rnder하고, map을 만들고 movie를 render 하자 

  getMovies = async() => {
    //async, await: axios가 끝날 때 까지 기다렸다가 계속하기(async 없이 await 단독으로 사용할 수 없음)
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
  }

 componentDidMount(){
    //데이터를 패치할 때 fetch대신 Axios를 사용해보자.(axios : fetch위의 작은 layer)
    //axios가 시간이 소요될 수 있기 때문에 javascript에게 componentDidMount가 시간이 소요될 수 있음을 알린다. (asyinc componentDidMount() 또는 getMovies 함수 만들기)
    this.getMovies();
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
