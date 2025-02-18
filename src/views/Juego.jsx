import { Link } from "react-router-dom"; 
import { modelos } from "../lib/modelos";
import Panel from "../components/Panel.jsx"; 

const Juego = () => {
  return (
    <div className="text-light">
      <header className="d-flex justify-content-between p-3">
        <h1>Juego de Comecocos David Henrique</h1>
      </header>

      <main className="container mt-5 bg-dark p-3 rounded">
        <div className="text-center p-4 d-flex justify-content-center">
          {/* Renderiza el Panel con la matriz de casillas */}
          <Panel arrayCasillas={modelos.matriz} />
        </div>
      </main>
    
        {/* boton  pal componente Instrucciones */}
      <Link to="/instrucciones">
        <button className="btn btn-success fs-1 mt-5">JUGAR</button>
      </Link>
    </div>
  );
};

export default Juego;
