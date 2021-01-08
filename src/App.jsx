import React,{useState} from 'react';
import './reset.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavAndWidgetCart from './components/general/NavAndWidgetCart/NavAndWidgetCart';
import Home from './components/Home';
import Category from './components/Category';
import Detail from './components/Detail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import TerrorGenre from "./components/Category/ProductsList/Genres/TerrorGenre";
import CienciaFGenre from "./components/Category/ProductsList/Genres/CienciaFGenre";
import FantasiaGenre from "./components/Category/ProductsList/Genres/FantasiaGenre";
import MisterioGenre from "./components/Category/ProductsList/Genres/MisterioGenre";
import {Store} from './store';

function App() {
  const [data, setData] = useState({
    items: [],
    cantidad: 0,
  })

  return (
    <Store.Provider value={[data, setData]}>
      <BrowserRouter>
        <NavAndWidgetCart />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/:category_name">
            <Category />
          </Route>
          <Route path="/terror">
            <TerrorGenre />
          </Route>
          <Route path="/ciencia-ficcion">
            <CienciaFGenre />
          </Route>
          <Route path="/fantasia">
            <FantasiaGenre />
          </Route>
          <Route path="/misterio">
            <MisterioGenre />
          </Route>
          <Route exact path="/:category_name/:id">
            <Detail />
          </Route>
        </Switch>
      </BrowserRouter>
    </Store.Provider>
  );
}

export default App;
