import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import About from './page/About';
import Products from './page/Products';
import PrivateRoute from './route/privateRoute'
import Login from './page/Login';
import Register from './page/Register';
import Cart from './page/Cart';

//회원가입 페이지 -완료
// /장바구니추가 버튼-완료

// 구매하기 버튼
// 장바구니 기능
// 데이터 필터링 기능
// 로그인 페이지에 아무것도 입력안됐을때는 로그인 버튼 작동안하게 하기

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
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

    </div>
  );
}

export default App;
