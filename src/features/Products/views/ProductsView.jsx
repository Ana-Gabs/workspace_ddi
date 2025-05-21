// features/Products/views/ProductsView.jsx
import React from 'react';
import styles from '../styles/products.module.css';
import ProductCard from '../components/ProductCard';

const mockProducts = [
  { id: 1, name: 'Producto A', description: 'Descripción A', image: '/assets/p1.jpg' },
  { id: 2, name: 'Producto B', description: 'Descripción B', image: '/assets/p2.jpg' },
  { id: 3, name: 'Producto C', description: 'Descripción C', image: '/assets/p3.jpg' },
];

export default function ProductsView() {
  return (
    <section className="ion-padding">
      <h2>Productos Destacados</h2>
      <div className={styles.productGrid}>
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className={styles.infoSection}>
        <div className={styles.infoText}>
          <h3>Sobre nosotros</h3>
          <p>
            Somos una empresa dedicada a proporcionar los mejores productos con la mejor calidad.
            Nuestro compromiso es la satisfacción de nuestros clientes.
          </p>
        </div>
        <div className={styles.infoImage}>
          <img src="/assets/about.jpg" alt="Sobre nosotros" className={styles.responsiveImage} />
        </div>
      </div>
    </section>
  );
}
