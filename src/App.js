import React from "react";
import NavBar from "./components/NavBar/NavBar";
import './app.css'
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";

function App() {
  return (
  <div>
      <NavBar />
      <Banner />
      <RowPost/>
  </div>
)
}

export default App;
