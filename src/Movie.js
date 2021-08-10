import React from "react";
import PropTypes from "prop-types";

//movie component는 stat가 필요없음 function 컴포넌트로 만들자.

function Movie({id, year, title, summary, poster}) {
  return (
    <h4>{title}</h4>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}

export default Movie;