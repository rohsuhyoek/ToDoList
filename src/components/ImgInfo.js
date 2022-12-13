import React from "react";

function ImgItem({ item }) {
  return (
    <div key={item.id} className="item">
      {/* <img className="item-img" src={item.img} alt={item.name}></img>
      <span className="item-name" data-testid={item.name}>
        {item.name}
      </span>
      <span className="item-price">{item.price}</span> */}
      <button>장바구니 담기</button>
    </div>
  );
}

export default ImgItem;
