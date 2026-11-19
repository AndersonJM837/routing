import { useState, useEffect } from 'react';

function Cronometro() {
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
    <div className="caja-cronometro">
      <h2>Cronómetro</h2>
      <div className="tiempo">{segundos} s</div>
      <div className="botones">
        <button
          className={activo ? 'btn-pausar' : 'btn-iniciar'}
          onClick={() => setActivo(!activo)}
        >
          {activo ? 'Pausar' : 'Iniciar'}
        </button>
        <button className="btn-reiniciar" onClick={reiniciar}>
          Reiniciar
        </button>
      </div>
    </div>
  );
}

export default Cronometro;
