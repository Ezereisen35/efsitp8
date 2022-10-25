import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './screens/Home';
import Detalle from './screens/Detalle';
import Productos from './screens/Productos';

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
