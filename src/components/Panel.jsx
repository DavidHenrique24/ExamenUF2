import React from "react";
import { colorPieza } from "../lib/colores";

const Panel = ({ arrayCasillas, posicionComecocos }) => {
  return (
    <div className="panel mt-5">
      {arrayCasillas.map((fila, filaIndex) => (
        <div className="fila d-flex" key={filaIndex}>
          {fila.map((casilla, casillaIndex) => {
            // Verifica si es la posición de Pacman
            const esComecocos = filaIndex === posicionComecocos.y && casillaIndex === posicionComecocos.x;
            return (
              <div
                key={casillaIndex}
                className={`celda ${colorPieza(casilla)} border border-dark`}
                style={{ width: "30px", height: "30px",}}
              >
                {/* Muestra el icono de comecocos si el lugar es correcto*/}
                {esComecocos && (
                  <i className="fas fa-circle"></i>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Panel;
