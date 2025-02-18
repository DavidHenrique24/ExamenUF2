import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Asegúrate de importar Route y Routes
import Juego from './views/Juego';
import Instrucciones from './views/Instruc';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router> 
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
