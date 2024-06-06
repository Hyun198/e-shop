import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Products from './page/Products';
import ProductDetail from './page/ProductDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>

    </div>
  );
}

export default App;
