import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './screens/home';
import Detalle from './screens/detalle';
import Productos from './screens/Productos';
import QuienesSomos from './screens/quienesSomos';
import Contacto from './screens/contacto';
import Carrito from './screens/carrito';

import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>     
          <Route path='/' element={<Home />} />
          <Route path='/DetalleProducto/:id' element={<Detalle />} />
          <Route path='/Productos' element={<Productos />} />
          <Route path='/quienesSomos' element={<QuienesSomos />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/carrito' element={<Carrito />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
