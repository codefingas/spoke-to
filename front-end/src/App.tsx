import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from "./Containers/Nav/Nav";
import Home from "./views/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
