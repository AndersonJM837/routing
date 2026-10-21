import { useState, useEffect } from 'react';

export default function Cronometro() {
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    let intervalo = null;

    if (activo) {
      intervalo = setInterval(() => {
        setSegundos((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalo);
    };
  }, [activo]);

  function reiniciar() {
    setActivo(false);
    setSegundos(0);
  }

  return (
    <div style={{
      maxWidth: '350px',
      margin: '60px auto',
      padding: '30px',
      borderRadius: '12px',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h2 style={{ margin: '0 0 20px 0', color: '#1f2937' }}>Mi Cronómetro</h2>

      <div style={{
        fontSize: '60px',
        fontWeight: 'bold',
        color: '#2563eb',
        marginBottom: '25px'
      }}>
        {segundos}s
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button
          onClick={() => setActivo(!activo)}
          style={{
            padding: '10px 20px',
            fontSize: '15px',
            borderRadius: '6px',
            border: 'none',
            backgroundColor: activo ? '#f59e0b' : '#10b981',
            color: '#ffffff',
            cursor: 'pointer'
          }}
        >
          {activo ? 'Pausar' : 'Iniciar'}
        </button>

        <button
          onClick={reiniciar}
          style={{
            padding: '10px 20px',
            fontSize: '15px',
            borderRadius: '6px',
            border: 'none',
            backgroundColor: '#ef4444',
            color: '#ffffff',
            cursor: 'pointer'
          }}
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
}
