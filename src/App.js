import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from './components/Navigation';
import "./App.css";

function App() {
  return (
    <HashRouter>
      {/* <Link>는 router 밖에서 사용할 수 없다. 따라서 <Navigation>도 지금처럼 Router 안에 존재해야 한다. */}
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;