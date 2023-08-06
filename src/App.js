import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import 대문이미지 from './img/bg.png'
import data from './data';
import './App.css';
import { useEffect, useState } from 'react';
import Detail from './page/Detail';
import axios from 'axios';


function App() {
  let [shoes, setShoes] = useState(data)

  let navigate = useNavigate();

  useEffect(() => {

  }, [])

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">SooMarker</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<div>
          <div className='main-bg' style={{ backgroundImage: 'url(' + 대문이미지 + ')' }}></div>
          <Container>
            <Row>
              {
                shoes.map((a,i) => {
                  return (<Card shoes={a} i={i+1} />)
                })
              }
            </Row>
          </Container>
        </div>} />
        <Route path='/detail/:id' element={<Detail shoes={shoes} />} />
        <Route path='*' element={<div>요청할수 없는 페이지 입니다.</div>} />
        <Route path='/event' element={<Event />}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path='two' element={<div>생일기념 쿠폰받기</div>} />
        </Route>
      </Routes>
      <button onClick={() => {
        axios.get('https://codingapple1.github.io/shop/data2.json').then((a) => {
          let data = a.data
          let copy = [...shoes, ...data]
          setShoes(copy)
        })
          .catch(() => {
            console.log('데이터 전송 실패!')
          })
      }}>데이터 요청!</button>
    </div>
  );

  function Event() {
    return (
      <div>
        <h4>오늘의 이벤트</h4>
        <Outlet></Outlet>
      </div>
    )
  }

  function Card(props) {
    return (
      <Col md={4} >
        <img src={'https://codingapple1.github.io/shop/shoes'+props.i+'.jpg'} width='80%' />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
      </Col>
    )
  }
}

export default App;
