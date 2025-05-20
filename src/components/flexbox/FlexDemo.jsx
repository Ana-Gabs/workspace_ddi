import React from 'react';
import './FlexDemo.css';

export default function FlexDemo() {
  return (
    <div className="flex-demo">
      <h2>Ejemplo de Flexbox</h2>

      <section className="flex-container">
        <div className="box box1">1</div>
        <div className="box box2">2</div>
        <div className="box box3">3</div>
        <div className="box box4">4</div>
        <div className="box box5">5</div>
      </section>

      <div className="description">
        <p><strong>display: flex;</strong> crea un contenedor flexible.</p>
        <p><strong>flex-flow: row wrap;</strong> define la dirección y si se permite el salto de línea.</p>
        <p><strong>justify-content: space-between;</strong> distribuye el espacio horizontalmente.</p>
        <p><strong>align-items: center;</strong> alinea verticalmente los ítems.</p>
        <p><strong>order:</strong> cambia el orden visual de los elementos.</p>
        <p><strong>align-self:</strong> permite a un hijo sobrescribir la alineación.</p>
      </div>
    </div>
  );
}
