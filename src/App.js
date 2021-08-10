/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function Food({ name, picture }) {
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} /> 
  </div>
}

const foodILike = [
  {
    name: "Kimchi",
    image: "https://img.hankyung.com/photo/201910/01.20660060.1.jpg"
  },
  {
    name: "Samgyeopsal",
    image: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/22/dailylife/20210522012648605cwhm.jpg"
  },
  {
    name: "Bibimpab",
    image: "https://static.wtable.co.kr/image-resize/production/service/recipe/582/4x3/a587ba43-a6ee-482d-a3ed-8ea0dba90e7f.jpg"
  },
  {
    name: "Doncasu",
    image: "https://www.ypsori.com/news/photo/201811/14515_14466_1033.jpg"
  },
  {
    name: "Kimbap",
    image: "https://www.ypsori.com/news/photo/201811/14515_14466_1033.jpg"
  }
]

function App() {
  return (
    <div>
      {foodILike.map(dish => <Food name={dish.name} picture = {dish.image} />)}
    </div>
  )
}

export default App;
