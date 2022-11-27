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
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {ContextProvider } from "./contextState";

function App() {

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
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
    
    <Footer />
    </ContextProvider>
  </React.StrictMode>
  
);



}

export default App;
