import React from "react";
import Products from "./Products";

export default function Home(props) {
  const { products, onAdd } = props;
 // console.log("home: ", props)
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="col card">
        {products.map((product) => (
          <Products key={product.id} product={product} onAdd={onAdd}></Products>
        ))}
      </div>
    </main>
  );
}
