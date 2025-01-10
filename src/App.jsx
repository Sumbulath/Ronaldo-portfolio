import Header from "./Components/Header"
import Home from "./Components/Home"
import About from "./Components/About"
import Achievements from "./Components/Achievements"
import Gallery from "./Components/Gallery"
import Contact from "./Components/Contact"




function App() {
  

  return (
    <>
    <div id="Header"><Header/></div>
    <div id="Home"><Home/></div>
    <div id="About"className="my-4"><About/></div>
    <div id="achievements"className="my-4"><Achievements/></div>
    <div id="gallery"className="my-4"><Gallery/></div>
    <div className="my-4"><Contact/></div>
    
     
    </>
  )
}

export default App
