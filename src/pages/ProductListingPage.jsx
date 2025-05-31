import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import plantData from '../assests/plants.json';

export default function ProductListingPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const grouped = {
    Succulents: plantData.filter(p => p.category === 'Succulent'),
    Ferns: plantData.filter(p => p.category === 'Fern'),
    Others: plantData.filter(p => p.category === 'Other'),
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Plantify Products</h1>
      {Object.entries(grouped).map(([category, plants]) => (
        <section key={category} style={{ marginBottom: '2rem' }}>
          <h2>{category}</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {plants.map(plant => (
              <div key={plant.id} style={{ border: '1px solid #ccc', padding: '1rem', width: '45%', textAlign: 'center' }}>
                <img src={plant.image} alt={plant.name} width="100%" style={{ maxHeight: '60vh', objectFit: 'cover' }} />
                <h4>{plant.name}</h4>
                <p>${plant.price}</p>
                <button
                  disabled={cartItems[plant.id] !== undefined}
                  onClick={() => dispatch(addToCart(plant))}
                >
                  {cartItems[plant.id] ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
