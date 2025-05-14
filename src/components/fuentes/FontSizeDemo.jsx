import React from 'react';
import '../styles/FontSizeDemo.css';

export default function FontSizeDemo() {
  return (
    <div className="font-size-demo">
      <div className="content">
        <h2>Tamaños de Fuente en EM</h2>
        <pre className="code-block">
{`html {
  font-size: 16px; /* Predeterminado */
}

div {
  font-size: 1.2em; /* 1.2 × 16 = 19.2px */
}

p {
  font-size: 1.2em; /* 1.2 × 19.2 = 23.04px */
}`}
        </pre>

        <div className="examples">
          <div className="example default-text">Este es un texto predeterminado.</div>
          <div className="example div-text">
            <p className="p-text">Este es un texto de párrafo.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
