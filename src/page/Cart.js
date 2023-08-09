import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addAge, addCount, changeName } from "../store";

const Cart = () => {
  let cart = useSelector((state) => state.cart);
  let user = useSelector((state) => state.user);

  let dispatch =useDispatch();
  return (
    <div>
      <button onClick={()=>{
        dispatch((changeName()))
      }}>로그인</button>
      <h4>{user.name} {user.age}님의 장바구니</h4>
      <button onClick={()=>{
        dispatch((addAge()))
      }}>+</button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((a) => {
            return (
              <tr>
                <td>1</td>
                <td>{a.name}</td>
                <td>{a.count}</td>
                <td><button onClick={()=>{
                  dispatch((addCount()))
                }}>+</button></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
