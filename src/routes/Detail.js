import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const { location, history } = this.props;
    //console.log(location.state);

    //state가 undefined 일 때(카드를 클릭하지 않고, url에 직접 movie-detail을 입력한 경우 state가 undefined 이다.)
    //home으로 리다이렉트 해주자.(movie-detail은 클릭으로만 접근 가능)
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }

  }
}

export default Detail;