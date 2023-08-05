import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { Routes, Route, Link,useNavigate, Outlet } from 'react-router-dom';
import 대문이미지 from './img/bg.png'
import data from './data';
import './App.css';
import { useState } from 'react';
import Detail from './page/Detail';


function App() {
  let [shoes, setShoes] = useState(data)
  let [count, setCount] = useState()
  let navigate = useNavigate();


  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">SooMarker</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
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
        <Route path='*' element={<div>요청할수 없는 페이지 입니다.</div>}/>
        <Route path='/event' element={<Event/>}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path='two' element={<div>생일기념 쿠폰받기</div>}/>
        </Route>
      </Routes>



    </div>
  );

  function Event(){
    return(
      <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
    )
  }
          

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
