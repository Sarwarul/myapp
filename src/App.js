import About from  "./About";
import Bio from "./Component/Bio";
import Body from "./Component/Body";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import { Route, Routes,Link } from "react-router-dom";
import ProjectBody from "./Component/ProjectBody";






function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to ="/">Home</Link></li>
          <li><Link to ="/aboutus">About Us</Link></li>
          <li><Link to="/project">Project</Link></li>
          <li><Link to ="/resume">Resume</Link></li>
          
        </ul>
      </nav>
    
      <Routes>
      <Route path="/" element={<Body/>}/>
      {/* <Route path="/header" element={<Header/>}/> */}
      <Route path="/aboutus" element={<About/>}/>
      <Route path="/project" element={<ProjectBody/>}/>
      
      </Routes>

      <Footer/>

      

      
    </div>
  );
}

export default App;
