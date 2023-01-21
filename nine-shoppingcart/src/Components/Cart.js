import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';

const Cart = ({ cartItem, removeItem, buyNow }) => {
  let amount = 0;

  cartItem.forEach((item) => {
    amount = parseFloat(amount) + parseFloat(item.productPrice);
  });

  return (
    <Container fluid>
      <h1 className="text-success">Your Cart</h1>
      <ListGroup>
        {cartItem.map((item) => (
          <ListGroupItem key={item.id}>
            <Row>
              <Col>
                <img height={80} src={item.tinyImage} alt="" />
              </Col>
              <Col className="text-center">
                <div className="text-primary">{item.productName}</div>
                <span>Price: {item.productPrice}Rs. </span>
                <Button
                  color="danger"
                  onClick={() => {
                    removeItem(item);
                  }}
                >
                  Remove
                </Button>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
      {cartItem.length >= 1 ? (
        <Card className="text-center mt-3">
          <CardHeader>Grand Total</CardHeader>
          <CardBody>
            Your amount for {cartItem.length} products is {amount}Rs.
          </CardBody>
          <CardFooter>
            <Button color="success" onClick={buyNow}>
              Pay here
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <h1 className="text-warning">Your Cart is Empty!!</h1>
      )}
    </Container>
  );
};

export default Cart;
