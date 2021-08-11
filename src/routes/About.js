import React from "react";
import "./About.css";

function About(props) {
  // 라우터에 있는 모든 라우트는 props를 기본값으로 갖고있다.
  //console.log를 통해 어떤 prop를 갖고 있는지 확인해보자
  console.log(props);
    return (
        <div className="about__container">
          <span>
            “Freedom is the freedom to say that two plus two make four. If that is
            granted, all else follows.”
          </span>
          <span>− George Orwell, 1984</span>
        </div>
      );
}

export default About;