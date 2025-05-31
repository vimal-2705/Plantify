import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Header() {
  const totalItems = useSelector(state => state.cart.totalCount);
  return (
    <header style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <nav>
        <Link to="/products" style={{ marginRight: '1rem' }}>Products</Link>
        <Link to="/cart">🛒 Cart ({totalItems})</Link>
      </nav>
    </header>
  );
}
