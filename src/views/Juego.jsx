import { useState, useEffect } from "react";
import Panel from "../components/Panel.jsx"; 
import { modelos } from "../lib/modelos"; 

const Juego = () => {

  const [posicionComecocos, setPosicionComecocos] = useState({ x: 10, y: 10 });//Usa el usestate para poner el comecocos en medio para que comienze en esa posicion

  // Función que maneja el movimiento del Comecocos
  const moverComecocos = (evento) => {
    let nuevaPosicion = { ...posicionComecocos };

    switch (evento.key) {
      case "ArrowUp":
        //Pongo limites para que no se desborde
        if (nuevaPosicion.y > 1) {
          nuevaPosicion.y -= 1;  //Agrego una mas 
        }
        break;
      case "ArrowDown":
        if (nuevaPosicion.y < modelos.matriz.length - 2) {
          nuevaPosicion.y += 1;
        }
        break;
      case "ArrowLeft":
        if (nuevaPosicion.x > 1) {
          nuevaPosicion.x -= 1;
        }
        break;
      case "ArrowRight":
        if (nuevaPosicion.x < modelos.matriz[0].length - 2) {
          nuevaPosicion.x += 1;
        }
        break;
      default:
        break;
    }
    // Actualiza la posicion
    setPosicionComecocos(nuevaPosicion);
  };

  useEffect(() => {
    // Agregar el listener para las teclas
    window.addEventListener("keydown", moverComecocos);
    return () => {
      window.removeEventListener("keydown", moverComecocos);
    };
  }, [posicionComecocos]); // Ejecuta cada que cambia la posicion

  return (
    <div className="text-light">
      <header className="d-flex justify-content-center p-3">
        <h1 className="text-center">Juego de Comecocos David Henrique</h1>
      </header>

      <main className="container mt-5 bg-dark p-3 rounded">
        <div className="text-center p-4 d-flex justify-content-center">
          {/* Renderiza el Panel pasando la posicion de Comecocos */}
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
