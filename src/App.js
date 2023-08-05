import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import 대문이미지 from './img/bg.png'
import data from './data';
import './App.css';
import { useState } from 'react';
import Detail from './page/Detail';


function App() {
  let [shoes, setShoes] = useState(data)
  let [count, setCount] = useState()


  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">SooMarker</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<div>
          <div className='main-bg' style={{ backgroundImage: 'url(' + 대문이미지 + ')' }}></div>
          <Container>
            <Row>
              {
                shoes.map((a) => {
                  return (<Card shoes={a} />)
                })
              }
            </Row>
          </Container>
        </div>} />
        <Route path='/detail' element={<Detail/>} />

      </Routes>



    </div>
  );

  function Card(props) {
    return (
      <Col md={4} >
        <img src={props.shoes.img} width='80%' />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
      </Col>
    )
  }
}

export default App;
