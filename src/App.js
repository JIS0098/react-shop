import {Container,Nav,Navbar,Row,Col} from 'react-bootstrap';
import 대문이미지 from './img/bg.png'
import data from './data';
import './App.css';
import { useState } from 'react';

function App() {
  let [shoes ,setShoes]=useState(data)
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

      <div className='main-bg' style={{backgroundImage:'url('+대문이미지+')'}}></div>
      <Container>
      <Row>
      <Shoes shoes={shoes}/>
      <Shoes shoes={shoes}/>
      <Shoes shoes={shoes}/>
      </Row>
    </Container>
    </div>
  );

  function Shoes(props){
    return(
      <Col md={4} >
        <img src={props.shoes[0].img} width='80%'/>
        <h4>{props.shoes[0].title}</h4>
        <p>{props.shoes[0].price}</p>
      </Col>
    )
  }
}

export default App;
