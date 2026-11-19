import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Inicio from './components/Inicio';
import Cronometro from './components/Cronometro';
import Contacto from './components/Contacto';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="contenedor">
        <h1>Mi Aplicación React</h1>
        <p>Práctica de rutas con React Router</p>

        <nav className="menu">
          <Link to="/">Inicio</Link>
          <Link to="/cronometro">Cronómetro</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>

        <div className="contenido">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/cronometro" element={<Cronometro />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
