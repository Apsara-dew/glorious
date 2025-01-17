import React from 'react';
import './ProductItem.css'; // Optional: separate CSS for product item

function ProductItem({ imageSrc, itemName, price }) {
  return (
    <div className="product-item">
      <img src={imageSrc} alt={itemName} />
      <p>{itemName}</p>
      <button>Inquiry</button>
    </div>
  );
}

export default ProductItem;
