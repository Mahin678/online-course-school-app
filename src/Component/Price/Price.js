import React from 'react';

const Price = (props) => {
    const cart = props.courseInfo;
    let price =0 ;
    for(let i = 0;i<cart.length;i++) {
        let element = cart[i];
        price += element.price
    }
      return (
      <div className="" >
          <h2 className="text-light" >Price : {price.toFixed(2)}</h2>
      </div>
    );
};

export default Price;