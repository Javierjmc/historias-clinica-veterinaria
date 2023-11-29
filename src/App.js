import Inicio from './componentes/Inicio';
import DatosGenerales from './componentes/DatosGenerales';
import Anamnesicos from './componentes/Anamnesicos';
import Motivo from './componentes/Motivo';
import Examen from './componentes/Examen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export default function App() {

  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Inicio />} />
      <Route path='/datos-generales' element={<DatosGenerales/>} />
      <Route path='/anamnesicos' element={<Anamnesicos/>} />
      <Route path='/motivo' element={<Motivo/>} />
      <Route path='/examen' element={<Examen/>} />
    </Routes>
  </BrowserRouter>
}