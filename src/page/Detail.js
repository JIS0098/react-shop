import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Detail = (props) => {
  let { id } = useParams();
  let 선택상품 = props.shoes.find((a) => {
    return a.id == id;
  });
 

  useEffect(() => {

  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={선택상품.img} width="100%" />
          </div>
          <div className="col-md-6">
         
              <div className="alert alert-danger">숫자를 입력해주세요.</div>:null
            
            <input onChange={(e)=>{}} type="text" placeholder="갯수를 입력해주세요."></input>
            <h4 className="pt-5">{선택상품.title}</h4>
            <p>{선택상품.content}</p>
            <p>{선택상품.price}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
