import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import About from './page/About';
import Products from './page/Products';
import PrivateRoute from './route/PrivateRoute'
import Login from './page/Login';
import Register from './page/Register';
import Cart from './page/Cart';


function App() {

  const [authenticate, setAuthenticate] = useState(false);


  useEffect(() => {
    console.log("result", authenticate);
  }, [authenticate])

  return (
    <div className="App">
      <Navbar authenticate={authenticate} />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:id" element={<PrivateRoute />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

    </div>
  );
}

export default App;
