import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';

function RestShop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9700/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <Container className="mt-4">
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {products.map(product => (
          <Col key={product.id}>
            <Card className="h-100">
              <Card.Img variant="top" src={product.imageUrl} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">{product.price.toLocaleString()}원</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default RestShop;
