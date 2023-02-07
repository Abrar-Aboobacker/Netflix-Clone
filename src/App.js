import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { Actions, orginals } from "./urls";
import './app.css'
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";

function App() {
  return (
  <div>
      <NavBar />
      <Banner />
      <RowPost url={orginals} title='Netflix Orginals' />
      <RowPost url={Actions} title='Action' isSmall/>
  </div>
)
}

export default App;
