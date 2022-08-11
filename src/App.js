import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import data from './data';
import { useState } from 'react';
function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div data-testid="app-id" className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Home products={products} onAdd={onAdd}></Home>
        <Cart
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Cart>
      </div>
    </div>
  );
}

export default App;
