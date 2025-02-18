import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Asegúrate de importar Route y Routes
import Juego from './views/Juego';
import Instrucciones from './views/Instruc';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router> {/* Todo el contenido debe ir dentro del Router */}
      <div className="App">
        <Routes> {/* Routes asegura que solo se renderice una ruta a la vez */}
          <Route path="/" element={<Instrucciones />} /> 
          <Route path="/juego" element={<Juego />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
