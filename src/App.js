import React from 'react';
import ShopItemFunc from './components/store-func/ShopItemFunc';
import './App.css';

const productСharacteristics = [
  {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£',
  },
];

function App() {
  return (
    <div className="container">
      <div className="background-element" />
      <div className="highlight-window">
        <div className="highlight-overlay" />
      </div>
      <div className="window">
        {
          // eslint-disable-next-line react/no-array-index-key
          productСharacteristics.map((item, num) => <ShopItemFunc item={item} key={num} />)
        }

      </div>
    </div>
  );
}

export default App;
