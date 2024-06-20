import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faBars, faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {
    const menuList = ['1/6 scale', '1/4 scale', 'MMS', 'TMS', 'VGM', 'COSBABY']

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const authenticate = useSelector(state => state.authenticate);

    const goLoginPage = () => {
        navigate('/login');
    }

    const logout = () => {
        dispatch({ type: "LOGOUT" });
        navigate("/");
    }
    const search = (e) => {
        if (e.key === 'Enter') {
            let keyword = e.target.value;
            navigate(`/?q=${keyword}`);
        }
    };



    let [width, setWidth] = useState(0);



    return (
        <div>
            <div className="side-menu" style={{ width: width }}>
                <button className="closebtn" onClick={() => setWidth(0)}>
                    &times;
                </button>
                <div className="side-menu-list" id="menu-list">
                    {menuList.map((menu, index) => (
                        <button key={index}>{menu}</button>
                    ))}
                </div>
            </div>

            <div className="nav-header">
                <div className="burger-menu hide">
                    <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
                </div>


                {authenticate ? (

                    <div className="nav-my-page">

                        <Link to="/cart" >
                            <FontAwesomeIcon icon={faBagShopping} />
                        </Link>

                        <Link to='/mypage'>My Page</Link>
                        <FontAwesomeIcon icon={faUser} />
                        <span onClick={logout} style={{ cursor: "pointer" }}>Log out</span>

                    </div>


                ) : (
                    <>
                        <div onClick={goLoginPage}>
                            <FontAwesomeIcon icon={faUser} />
                            <span style={{ cursor: "pointer" }}>로그인</span>
                        </div>
                    </>

                )}
            </div>

            <div className="nav-logo">
                <Link to="/">
                    <img width={150}
                        src="https://d33wubrfki0l68.cloudfront.net/d828ee1d8d02934a37ad97ea22242a5f99575dec/1e494/assets/img/manufacturers/hot-toys.png"
                        alt="hottoys-logo"
                    />
                </Link>
            </div>

            <div class="nav-menu-area">
                <ul className="menu">
                    {menuList.map((menu, index) => (
                        <li key={index}>
                            {menu}
                        </li>
                    ))}
                </ul>

                <div className="search-box">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" placeholder="제품검색" onKeyDown={search} />
                </div>


            </div>

        </div >
    )
}

export default Navbar