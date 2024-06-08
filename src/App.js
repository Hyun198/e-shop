import './App.css';
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './page/Home';
import About from './page/About';
import Products from './page/Products';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import Userpage from './page/Userpage';


/*nav bar 만들기*/
function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const PrivateRoute = () => {

    return authenticate === true ? <Userpage /> : <Navigate to="/login" />
  }


  return (
    <div className="App">
      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<PrivateRoute />} />
      </Routes>

    </div>
  );
}

export default App;
