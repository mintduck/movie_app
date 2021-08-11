import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      {/* path about.js path로 가면 About 컴포넌트를 보여줘라 */}
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;