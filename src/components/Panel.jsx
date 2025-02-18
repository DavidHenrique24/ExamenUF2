import React from "react";
import { colorPieza } from "../lib/colores";

const Panel = ({ arrayCasillas }) => {
  return (
    <div className="panel mt-5">
      {arrayCasillas.map((fila, filaIndex) => (
        <div className="fila d-flex" key={filaIndex}> {/* key para la fila */}
          {fila.map((casilla, casillaIndex) => (
            <div
              key={casillaIndex}  // key para la celda
              className={`celda ${colorPieza(casilla)} border border-dark`} 
              style={{ width: "30px", height: "30px", display: "flex", justifyContent: "center", alignItems: "center" }}
            >
              {/* En lugar de pintar un color, muestra el ícono */}
              {casilla !== 0 && <i className={colorPieza(casilla)} style={{ fontSize: "20px" }}></i>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Panel;
