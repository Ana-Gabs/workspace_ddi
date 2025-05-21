// features/Products/components/ProductCard.jsx
import React from 'react';
import styles from '../styles/products.module.css';

export default function ProductCard({ product }) {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.responsiveImage}
          loading="lazy"
        />
      </div>
      <div className={styles.cardContent}>
        <h4 className={styles.productTitle}>{product.name}</h4>
        <p className={styles.productDescription}>{product.description}</p>
        <button>Ver detalles</button>
      </div>
    </div>
  );
}
