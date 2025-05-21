// features/Products/pages/ProductsPage.jsx
import React from 'react';
import ProductsView from '../views/ProductsView';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function ProductsPage() {
  return (
    <>
      <Header />
      <ProductsView />
      <Footer />
    </>
  );
}
