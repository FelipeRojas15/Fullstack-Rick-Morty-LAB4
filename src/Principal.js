
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';


import CompNF from "./componentes/CompNF";
import Episodios from "./componentes/Episodios";
import Infoper from './componentes/Infoper';
import App from './App';
import Menu from './componentes/Menu';
function Principal() {
  return (
    <BrowserRouter>
    <Menu/>
      <Routes>
        
        <Route path="/app" element={<App/>}/>
        <Route path="/epi" element={<Episodios/>}/>
        <Route path="/inf" element={<Infoper/>}/>
        <Route path="*" element={<CompNF/>}/>
        <Route path="/" element={<App/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default Principal;