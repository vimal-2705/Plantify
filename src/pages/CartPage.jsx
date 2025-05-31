import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, deleteItem } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const dispatch = useDispatch();
  const { items, totalCount, totalPrice } = useSelector(state => state.cart);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Your Shopping Cart</h1>
      <p>Total items: {totalCount}</p>
      <p>Total price: ${totalPrice.toFixed(2)}</p>

      {Object.values(items).length === 0 && <p>Your cart is empty.</p>}

      {Object.values(items).map(item => (
        <div key={item.id} style={{ borderBottom: '1px solid #ccc', padding: '1rem 0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img src={item.image} alt={item.name} width={80} style={{ objectFit: 'cover' }} />
          <div style={{ flexGrow: 1 }}>
            <h4>{item.name}</h4>
            <p>Unit Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
          <div>
            <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
            <button onClick={() => dispatch(decreaseQuantity(item.id))} disabled={item.quantity === 1}>-</button>
            <button onClick={() => dispatch(deleteItem(item.id))} style={{ marginLeft: '1rem' }}>Delete</button>
          </div>
        </div>
      ))}

      <button
        style={{ marginTop: '1rem', padding: '1rem 2rem' }}
        onClick={() => alert('Coming Soon')}
        disabled={totalCount === 0}
      >
        Checkout
      </button>

      <Link to="/products">
        <button style={{ marginLeft: '1rem', padding: '1rem 2rem' }}>
          Continue Shopping
        </button>
      </Link>
    </div>
  );
}
