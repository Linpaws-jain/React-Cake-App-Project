import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Component/Navbar'
import ProductList from './Component/ProductList'
import Cart from './Component/Cart/Cart'
import Default from './Component/Default'
import Details from './Component/Details'
import Modal from './Component/Modal'


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/' component={ProductList} />
        <Route path='/details' component={Details} />
        <Route path='/cart' component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
