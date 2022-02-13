import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import './App.css';
import InfoBlock from './Components/Header/InfoBlock';
import Nav from './Components/Nav/Nav';
import { Footer } from './Components/Footer/Footer';
import Main from './Pages/Main/Main';

import { Womenclother } from './Pages/Women/WomenClother';
import { Manclother, Menclother } from './Pages/Men/MenClother';
import {Product} from './Pages/Product/product';


function App() {
  return (
    // <BrowserRouter>
    //   <div className="App">
    //     <InfoBlock />
    //     <div className="container">
    //       <Nav />
    //       <Menu />
    //       <Delivery />
    //       <Clothers itemList={clothersItems}/>
    //       <SpecialOffer />
    //     </div>
    //     <SpecialBanner />
    //     <Blog />
    //     <Footer />
    //     <Route path='/women' component={Womenclother}/>
    //   </div>
    // </BrowserRouter>
    <BrowserRouter>
      <div className="App">
        <InfoBlock />
        <Nav/>
        <Route path='/main' component={Main} />
        <Route path='/women' component={Womenclother} />
        <Route path='/men' component={Menclother} />
        <Route path='/product' component={Product}/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
