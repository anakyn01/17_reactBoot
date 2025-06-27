import {Container, Row, Col, Carousel} from 'react-bootstrap';
import {useEffect, useState} from "react";
import axios from "axios";

const Home = () => {

    const [hello, setHello] = useState('');

    useEffect(() => {
        axios.get('http://localhost:9700/api/test')
            .then((res) => {
                setHello(res.data);
            })
    }, []);

    return(
<>
<Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 h400"
          src="https://images.pexels.com/photos/1006166/pexels-photo-1006166.jpeg"
          alt="First slide"
        />
        <Carousel.Caption className='text-white'>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h400"
          src="https://images.pexels.com/photos/1152127/pexels-photo-1152127.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption className='text-white'>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h400"
          src="https://images.pexels.com/photos/1292888/pexels-photo-1292888.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption className='text-white'>
          <h5 >Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
<Container>
    <Row>
        <Col>
        <h1 className='mt-4 mb-2'>스프링 부트로 백앤드 받아옵니다 우왕 ㅋ 구드</h1>
        <h1 className='display-4 text-secondary'>{hello}</h1>
        </Col>
    </Row>
</Container>
</>
    );
}
export default Home;