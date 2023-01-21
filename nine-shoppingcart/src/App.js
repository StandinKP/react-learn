import React, { useState } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import BuySection from './Components/BuySection';
import { Col, Container, Row } from 'reactstrap';
import Cart from './Components/Cart';

const App = () => {
  const [cartItem, setCartItem] = useState([]);

  const addInCart = (item) => {
    const isAlreadyAdded = cartItem.findIndex(function (array) {
      return array.id === item.id;
    });

    if (isAlreadyAdded !== -1) {
      toast('Already Added to Cart', {
        type: 'error',
      });
      return;
    }

    setCartItem([...cartItem, item]);
  };

  const buyNow = () => {
    setCartItem([]);
    toast('Payment Successfull!', {
      type: 'success',
    });
  };

  const removeItem = (item) => {
    setCartItem(cartItem.filter((singleItem) => singleItem.id !== item.id));
  };

  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md={8}>
          <BuySection addInCart={addInCart} />
        </Col>
        <Col md={4}>
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
