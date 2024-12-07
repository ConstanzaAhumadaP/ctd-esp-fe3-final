
import { Routes, Route} from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import './index.css'



function App() {

  return (
      <div className="app">
          <Navbar/>
        
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/favs" element={<Favs/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>  
            <Route path="/contact" element={<Contact/>}/>  
          </Routes>
      
          <Footer/>
      
      </div>
  );
}

export default App;
