import { useState } from 'react';

function Inicio() {
  const [contador, setContador] = useState(0);

  return (
    <div className="caja-vista">
      <h2>Página de Inicio</h2>
      <p>Bienvenido a mi aplicación con React Router.</p>
      <div style={{ marginTop: '20px' }}>
        <p>Contador de clics: {contador}</p>
        <button className="btn-contador" onClick={() => setContador(contador + 1)}>
          Aumentar
        </button>
      </div>
    </div>
  );
}

export default Inicio;
