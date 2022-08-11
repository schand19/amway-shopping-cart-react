import React from "react";

export default function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;

  const discountPrice = cartItems.map((e) => {
    if (e.promo.minQuantity && e.qty >= e.promo.minQuantity) {
      return { ...e, price: e.price - (e.promo.discount / 100) * e.price };
    } else if (e.promo.buy && e.qty >= e.promo.buy) {
      return { ...e, promoQuantity : e.qty + (Math.floor(e.qty / e.promo.buy) * e.promo.free)};
    }
    return e;
  });

  console.log("offerPrice: ", discountPrice);
  const itemsPrice = discountPrice.reduce((p, c) => p + (c.promoQuantity ? c.promoQuantity : c.qty) * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside className="block block-cart col-1">
      <h2>Cart Summary</h2>
      <div>
        {discountPrice.length === 0 && <div>Cart is empty</div>}
        {discountPrice.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{" "}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
             <div> {item.qty} x RM {item.price.toFixed(2)}</div>
              {item.promoQuantity ? (<small>Total Quantity : {item.promoQuantity}</small>) : ''}
              {(item.qty >=item.promo.minQuantity) && item.promo.discount ? (<small>Discount : {item.promo.discount}%</small>) : ''}
            </div>
            
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">RM {itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">RM {taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                RM {shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>RM {totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button>Checkout</button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
