import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import 대문이미지 from './img/bg.png'
import data from './data';
import './App.css';
import { useEffect, useState } from 'react';
import Detail from './page/Detail';
import axios from 'axios';
import Cart from './page/Cart';

function App() {
  let [shoes, setShoes] = useState(data)
  let [count, setCount] = useState(1)
  let [loading, setLoading] = useState(true)

  let navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://codingapple1.github.io/shop/data${count}.json`).then((a) => {
      let copy = [...shoes, ...a.data]
      setShoes(copy)
      setLoading(false)
    })
      .catch(() => {
        console.log('데이터 전송 실패!')
        setLoading(false)
      })
  }, [count])

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">SooMarker</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart') }}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<div>
          <div className='main-bg' style={{ backgroundImage: 'url(' + 대문이미지 + ')' }}></div>
          <Container>
            <Row>
              {
                shoes.map((a, i) => {
                  return (<Card shoes={a} i={i + 1} />)
                })
              }
              {loading ?
                <div>...로딩중</div>
                : null
              }
              {
                count > 3 ?
                  <div>추가할 상품이 없습니다.</div>
                  : <button onClick={() => {
                    setCount(count + 1)
                  }}>더보기</button>

              }
            </Row>
          </Container>
        </div>} />
        <Route path='/detail/:id' element={<Detail shoes={shoes} />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<div>요청할수 없는 페이지 입니다.</div>} />
        <Route path='/event' element={<Event />}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path='two' element={<div>생일기념 쿠폰받기</div>} />
        </Route>
      </Routes>
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
      <Col onClick={()=>{
        navigate(`/detail/${props.shoes.id}`)
      }} md={4} >
        <img src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'} width='80%' />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
      </Col>
    )
  }
}

export default App;
