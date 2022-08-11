import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
          <h1>Amway Shopping Cart</h1>
      </div>
      <div>
        <p>
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </p>{' '}
      </div>
    </header>
  );
}
