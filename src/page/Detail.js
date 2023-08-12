import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../store";


const Detail = ({shoes}) => {
  let { id } = useParams();
  let 선택상품 = shoes.find((a) => {
    return a.id == id;
  });
  let [입력값, 입력값변경] = useState(0);
  let [탭, 탭변경] = useState(0);
  let [end, setEnd] = useState('');
  let dispatch =useDispatch();


  useEffect(() => {
    setTimeout(() => { setEnd('end') }, 100)
    if (isNaN(입력값) == true) {
      alert('그러지마세요')
    }
    return ()=>{
      setEnd('')
    }
  }, [입력값])
  return (
    <div className={"start "+end}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={`https://codingapple1.github.io/shop/shoes${Number(id)+1}.jpg`} width='80%' />
          </div>
          <div className="col-md-6">
            <input onChange={(e) => { 입력값변경(e.target.value) }} type="text" placeholder="갯수를 입력해주세요."></input>
            <h4 className="pt-5">{선택상품 && 선택상품.title}</h4>
            <p>{선택상품 &&선택상품.content}</p>
            <p>{선택상품 &&선택상품.price}</p>
            <button onClick={()=>{
              dispatch(addCart({ id: 선택상품.id, name: 선택상품.title, count: 1 }))
            }} className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={() => { 탭변경(0) }} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { 탭변경(1) }} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { 탭변경(2) }} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent 탭={탭} shoes={shoes} />
    </div>
  );

  function TabContent({탭,shoes}) {
    let [end, setEnd] = useState('');
    useEffect(() => {
      setTimeout(() => { setEnd('end') }, 100)
      return ()=>{
        setEnd('')
      }
    }, [탭])
    return (
      <div className={'start '+ end}>
        {[<div>{shoes.title}</div>, <div>내용1</div>, <div>내용2</div>][탭]}
      </div>
      )
  }

};

export default Detail;
