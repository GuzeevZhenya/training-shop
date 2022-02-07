// import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import './App.css';
import InfoBlock from './Components/Header/InfoBlock';
import Nav from './Components/Nav/Nav';
import { Menu } from './Components/Menu/Menu';
import { Delivery } from './Components/Delivery/Delivery';
import { Clothers } from './Components/Clothers/Clothers';


function App() {
  return (
    <div className="App">
      <InfoBlock />
      <div className='container'>
        <Nav />
        <Menu />
        <Delivery />
        <Clothers/>
      </div>
    </div>

    // <Router>
    //     <Navbar/>
    //     <Routes>
    //       <Route path="/*" element={<Main data={data}/>}/>
    //       <Route path="/about" element={<About/>}/>
    //       <Route path="/women" element={<Women/>}/>
    //       <Route path="/men" element={<Men/>}/>
    //       <Route path="/beauty" element={<Beauty/>}/>
    //       <Route path="/accessories" element={<Accessories/>}/>
    //       <Route path="/contact" element={<Contacts/>}/>
    //     </Routes>
    //     <Footer/>
    // </Router>
  );
}

export default App;
