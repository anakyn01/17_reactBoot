import {Container, Row, Col, Button} from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

const Shop = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 상품 API 불러오기
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('상품 불러오기 실패:', err);
        setLoading(false);
      });
  }, []);

    return(
<>
<Container>
    <Row>
        <Col>
        <h1 className='mt-4 mb-2'>react json api</h1>
        </Col>
    </Row>
</Container>
<div className="container mt-4">
      <h1 className="mb-4">🛒 쇼핑몰 상품 목록</h1>

      {loading ? (
        <p>상품을 불러오는 중입니다...</p>
      ) : (
        <div className="row">
          {products.map(product => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100">
                <img
                  src={product.image}
                  className="card-img-top p-3"
                  alt={product.title}
                  style={{ height: '300px', objectFit: 'contain' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text text-truncate">{product.description}</p>
                  <p className="card-text fw-bold">${product.price}</p>
                  <div className='d-flex justify-content-end'>
                    <Button variant="outline-primary">장바구니</Button>
                </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
</>
    );
}
export default Shop;