import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { random, commerce } from 'faker';
import { Col, Container, Row } from 'reactstrap';
import CartItem from './CartItem';

const BuySection = ({ addInCart }) => {
  const apiKey = '563492ad6f917000010000019e009e6520fb483a8b0fd931ea9df8c3';
  const url = 'https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1';
  const [product, setProduct] = useState([]);

  const fetchPhotos = async () => {
    const response = await Axios.get(url, {
      headers: {
        Authorization: apiKey,
      },
    });
    const { photos } = response.data;

    const allProducts = photos.map((photo) => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: random.word().toUpperCase(),
      productPrice: commerce.price(),
      id: random.uuid(),
    }));

    setProduct(allProducts);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <h1 className="text-success text-center">Buy Page</h1>
      <Row>
        {product.map((product) => (
          <Col md={4} key={product.id}>
            <CartItem product={product} addInCart={addInCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuySection;
