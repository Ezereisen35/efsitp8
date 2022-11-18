import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './screens/home';
import Detalle from './screens/Detalle';
import Productos from './screens/Productos';
import QuienesSomos from './screens/quienesSomos';
import Contacto from './screens/contacto';
import Carrito from './screens/carrito';

function App() {
  return (
    <BrowserRouter>
      <Routes>     
          <Route path='/' element={<Home />} />
          <Route path='/Detalle/:id' element={<Detalle />} />
          <Route path='/Productos' element={<Productos />} />
          <Route path='/quienesSomos' element={<QuienesSomos />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/carrito' element={<Carrito />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
