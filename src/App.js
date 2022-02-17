import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import './App.css';
import InfoBlock from './Components/Header/InfoBlock';
import Nav from './Components/Nav/Nav';
import { Footer } from './Components/Footer/Footer';
import Main from './Pages/Main/Main';

import { Womenclother } from './Pages/Women/WomenClother';
import { Manclother, Menclother } from './Pages/Men/MenClother';
import { Product } from './Pages/Product/product';

function App() {
  return (
    <BrowserRouter>
      <div className="app" data-test-id="app">
        <InfoBlock />
        <Nav />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/Main" component={Main} />
          <Route exact path="/women" component={Womenclother} />
          <Route exact path="/men" component={Menclother} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/men/:id" component={Product} />
          <Route exact path="/women/:id" component={Product} />
          <Route component={Main} />
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
