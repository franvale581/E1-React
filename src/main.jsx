import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { MenuProvider } from './hooks/MenuContext/menuContext.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './hooks/CartContext/cartContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <MenuProvider>
          <CartProvider>
            <App />
          </CartProvider>
      </MenuProvider>
    </Router>
  </React.StrictMode>,
);