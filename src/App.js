import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { Actions, ComedyMovies, Documentaries, Dramas, HorrorMovies, orginals, RomanceMovies } from "./urls";
import './app.css'
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";

function App() {
  return (
  <div>
      <NavBar />
      <Banner />
      <RowPost url={orginals} title='Netflix Orginals' />
      <RowPost url={Actions} title='Action' isSmall />
      <RowPost url={ComedyMovies} title='Comedy ' isSmall/>
      <RowPost url={HorrorMovies} title='Horror ' isSmall/>
      <RowPost url={RomanceMovies} title='Romance ' isSmall/>
      <RowPost url={Documentaries} title='Documentary' isSmall/>
      <RowPost url={Dramas} title='Drama' isSmall/>

  </div>
)
}
export default App;
