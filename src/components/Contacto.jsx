import { useState } from 'react';

function Contacto() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (nombre !== '' && mensaje !== '') {
      setEnviado(true);
    }
  }

  return (
    <div className="caja-vista">
      <h2>Contacto</h2>
      {enviado ? (
        <p className="mensaje-exito">¡Gracias {nombre}, mensaje enviado!</p>
      ) : (
        <form onSubmit={handleSubmit} className="formulario">
          <input
            type="text"
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="text"
            placeholder="Tu mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
}

export default Contacto;
