import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const backgroundStyle = {
    backgroundImage: "url('/assets/images/plant-background.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    color: 'white',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  return (
    <div style={backgroundStyle}>
      <h1 style={{ color: 'black' }}>🌿 Plantify</h1>
      <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.25rem', color: 'black' }}>
        We bring nature to your doorstep with our curated collection of indoor houseplants.
      </p>
      <Link to="/products">
        <button style={{ marginTop: '2rem', padding: '1rem 2rem', fontSize: '1rem' }}>
          Get Started
        </button>
      </Link>
    </div>
  );
}
