import { useState } from "react";
import Panel from "../components/Panel.jsx"; 
import { modelos } from "../lib/modelos"; 

const Juego = () => {

  const [posicionComecocos ] = useState({ x: 10, y: 10 });//Usa el usestate para poner el comecocos en medio para que comienze en esa posicion

  return (
    <div className="text-light">
   <header className="d-flex justify-content-center p-3">
     <h1 className="text-center">Juego de Comecocos David Henrique</h1>
    </header>


      <main className="container mt-5 bg-dark p-3 rounded">
        <div className="text-center p-4 d-flex justify-content-center">
          {/* Renderiza el Panel pasando la posicion de Cmecocos */}
          <Panel arrayCasillas={modelos.matriz} posicionComecocos={posicionComecocos} />
        </div>
      </main>
    
      <div className="d-flex justify-content-center">
        <button className="bg-dark btn btn-secondary">Instrucciones</button>
      </div>
    </div>
  );
};

export default Juego;
