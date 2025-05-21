import React from 'react';
import styles from '../styles/products.module.css';
import ProductCard from '../components/ProductCard';

import p1 from '../../../assets/p1.jpg';
import p2 from '../../../assets/p1.jpg';
import p3 from '../../../assets/p1.jpg';

const mockProducts = [
  { id: 1, name: 'Producto A', description: 'Descripción A', image: p1 },
  { id: 2, name: 'Producto B', description: 'Descripción B', image: p2 },
  { id: 3, name: 'Producto C', description: 'Descripción C', image: p3 },
];

export default function ProductsView() {
  return (
    <section className={styles['products-section']}>
      <h2>Productos Destacados</h2>

      <div className={styles['product-grid']}>
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className={styles['info-section']}>
        <div className={styles['info-text']}>
          <h3>Sobre nosotros</h3>
          <p>
            Somos una empresa dedicada a proporcionar los mejores productos con la mejor calidad.
            Nuestro compromiso es la satisfacción de nuestros clientes.
          </p>
        </div>
      </div>
    </section>
  );
}
