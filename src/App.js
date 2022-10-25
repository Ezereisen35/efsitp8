import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Detalle from './pages/Detalle';
import Productos from './pages/Productos';

function App() {
  return (
    <BrowserRouter>
      <Routes>     
          <Route path='/' element={<Home />} />
          <Route path='/Detalle/:id' element={<Detalle />} />
          <Route path='/Productos' element={<Productos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
