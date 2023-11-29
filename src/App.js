import Inicio from './componentes/Inicio';
import DatosGenerales from './componentes/DatosGenerales';
import Anamnesicos from './componentes/Anamnesicos';
import Motivo from './componentes/Motivo';
import Examen from './componentes/Examen';

function App() {
  return (
    <div className="App">
      {/* <Inicio/> */}
      <DatosGenerales/>
      <Anamnesicos/>
      <Motivo/>
      <Examen/>
    </div>
  );
}

export default App;
