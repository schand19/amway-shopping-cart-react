import React from "react";

export default function Products(props) {
  const { product, onAdd } = props;
 // console.log("Products: ", product)
  return (
    <div>
    <div className="row">
      <div className="col-2">
        <img className="small" src={product.image} alt={product.name} />
      </div>
      <div className="col-2">
        <h3>{product.name}</h3>
        {product.promo.buy ? (
            <p>buy {product.promo.buy} get {product.promo.free} free</p>
          ) : (
            ''
          )}
          {product.promo.discount ? (
            <p>get {product.promo.discount}% on minimum {product.promo.minQuantity} items</p>
          ) : (
            ''
          )}
        <div>RM {product.price}</div>
      </div>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
    <hr></hr>
    </div>
  );
}
