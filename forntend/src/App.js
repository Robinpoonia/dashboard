import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/common/Nav";
const App = () => {
  return(
    <div className="">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={"Products list"}/>
          <Route path="/add" element={" add Products"}/>
          <Route path="/update" element={" update Products"}/>
          <Route path="/logout" element={"Logout"}/>
          <Route path="/profile" element={"user profile"}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
};

export default App;
