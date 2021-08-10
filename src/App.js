/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from "prop-types"

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://img.hankyung.com/photo/201910/01.20660060.1.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/22/dailylife/20210522012648605cwhm.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "Bibimpab",
    image: "https://static.wtable.co.kr/image-resize/production/service/recipe/582/4x3/a587ba43-a6ee-482d-a3ed-8ea0dba90e7f.jpg",
    rating: 4.8
  },
  {
    id: 4,
    name: "Doncasu",
    image: "https://www.ypsori.com/news/photo/201811/14515_14466_1033.jpg",
    rating: 5.5
  },
  {
    id: 5,
    name: "Kimbap",
    image: "https://www.ypsori.com/news/photo/201811/14515_14466_1033.jpg",
    rating: 4.7
  }
]

// function renderFood(dish) {
//    console.log(dish);
//    return <Food name={dish.name} picture={dish.image} />
// }


function Food({ name, picture, rating }) {
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
}

Food.propTypes = {
  name:PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired//rating이 숫자이기 때문에 PropTypes.string.isRequired 라면 console에 expected'string' 오류가 나타남
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
