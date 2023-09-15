import { Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Home from "./components/Principal/Home/Home";
import HomeAdmin from './components/ADMIN/HomeAdmin/HomeAdmin';
import CrearEmpresa from './components/ADMIN/Empresa/Crear/CrearEmpresa';
import Detail from './components/ADMIN/Empresa/Detail/Detail';


axios.defaults.baseURL='http://localhost:3001/apiv/';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/admin' element={<HomeAdmin/>}/>
      <Route path='/detail' element={<Detail/>}/>
      <Route path='/crearEmpresa' element={<CrearEmpresa/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
