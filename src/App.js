import Navbar from "./Components/Navbar"
import Intro from "./Components/Intro"
import Featured from "./Components/Featured"
import Recent from "./Components/Recent"
import Skills from "./Components/Skills"
import Footer from "./Components/Footer"

import {  useState } from "react";


export default function App() {

  let [introShown , setIntroShown] = useState(true)
  console.log("is the intro shown " , introShown)

  return (
    <div className="App">
      <Navbar introShown={introShown}/>
      <br id="intro"/>
      <Intro setIntroShown={setIntroShown} />
      <br id="featured"/>
      <Featured/>
      <br id="recent"/>
      <Recent/>
      <br  id="skills"/>
      <Skills/>
      <Footer/>
    </div>
  );
}

