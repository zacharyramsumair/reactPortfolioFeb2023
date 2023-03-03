import Navbar from "./Components/Navbar"
import Intro from "./Components/Intro"
import Featured from "./Components/Featured"
import Recent from "./Components/Recent"
import Skills from "./Components/Skills"
import Footer from "./Components/Footer"


export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Featured/>
      <Recent/>
      <Skills/>
      <Footer/>
    </div>
  );
}

