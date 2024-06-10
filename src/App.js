import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import About from './page/About';
import Products from './page/Products';
import ProductDetail from './page/ProductDetail';
import PrivateRoute from './route/privateRoute'
import Login from './page/Login';

/*nav bar 만들기*/
function App() {

  const [authenticate, setAuthenticate] = useState(false);


  useEffect(() => {
    console.log("result", authenticate);
  }, [authenticate])
  return (
    <div className="App">
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />


      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:id" element={<PrivateRoute authenticate={authenticate} />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />

      </Routes>

    </div>
  );
}

export default App;
