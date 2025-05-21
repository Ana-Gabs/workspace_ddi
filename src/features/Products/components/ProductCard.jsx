// features/Products/components/ProductCard.jsx
import React from 'react';
import styles from '../styles/products.module.css';

export default function ProductCard({ product }) {
  return (
    <div className={styles['product-card']}>
      <div className={styles['image-container']}>
        <img
          src={product.image}
          alt={product.name}
          className={styles['responsive-image']}
          loading="lazy"
        />
      </div>
      <div className={styles['product-content']}>
        <h4 className={styles['product-title']}>{product.name}</h4>
        <p className={styles['product-description']}>{product.description}</p>
        <button>Ver detalles</button>
      </div>
    </div>
  );
}
