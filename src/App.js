import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from './components/Navigation';
import "./App.css";

function App() {
  return (
    // 라우터에 있는 모든 라우트는 props를 기본값으로 갖고있다.
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}

export default App;