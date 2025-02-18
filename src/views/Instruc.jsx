import { Link } from 'react-router-dom';

const Instrucciones = () => {
  return (
    <div className="text-light">
      <main className="container mt-5 bg-opacity-50 bg-dark p-4 rounded">
        <h1 className="text-center text-white">Examen David Henrique UF2</h1>
        <div className="text-center p-4">
          <p>
            Comecocos es un videojuego arcade creado por el diseñador de videojuegos Toru Iwatani de la empresa Namco, y distribuido por Midway Games al mercado estadounidense a principios de los años 1980. <br/>Desde que Pac-Man fue lanzado el 22 de mayo de 1980,4 fue un éxito. Se convirtió en un fenómeno mundial en la industria de los videojuegos, llegó a tener el récord Guiness del videojuego de arcade más exitoso de todos los tiempos con un total de 293 822 máquinas vendidas desde 1981 hasta 1987 y acabó con el dominio de Space Invaders,
          </p>
          <h2 className="mt-4">Instrucciones:</h2>
          <ul className="text-start mt-3">
            <li>Una cuadrícula de 20x20.</li>
            <li>Un Comecocos que comienza en el centro de la cuadrícula.</li>
            <li>Cinco fantasmas posicionados aleatoriamente en la cuadrícula.</li>
            <li>El jugador puede mover al Comecocos utilizando las flechas del teclado.</li>
          </ul>
          <Link to="/juego">
            <button className="btn btn-success fs-1 mt-5">JUGAR</button>
          </Link>
          <hr />
        </div>
      </main>
    </div>
  );
};

export default Instrucciones;
