/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {

  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false })//this.setState({movies:movies})  앞의 movies는 state에 있고, 뒤의 movies는 axios에서 옴 축약해서({movies})라고 쓸 수 있다.
  }

  componentDidMount() {
    this.getMovies();
  }

  //API에서 데이터를 가져와 state의 isLoading을 나타낸 뒤 API에서 가져온 데이터를 보여준다.

  render() {
    const { isLoading, movies } = this.state;
    return (<div>{isLoading ? "Loading..." : movies.map(movie => (
          //console.log(movie);
          <Movie
            key={movie.id}
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
          />
        ))}
    </div>
  );
}

} 

export default App;
