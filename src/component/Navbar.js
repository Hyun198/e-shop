import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const menuList = ['1/6 scale', '1/4 scale', 'MMS', 'TMS', 'VGM', 'COSBABY']
    const navigate = useNavigate()

    const goLoginPage = () => {

        navigate('/login');
    }

    const search = (e) => {
        if (e.key === 'Enter') {
            let keyword = e.target.value;

            //url 바꾸기
            navigate(`/?q=${keyword}`)

        }
    }

    return (
        <div>
            <div className='login-btn' onClick={goLoginPage}>
                <FontAwesomeIcon icon={faUser} />
                <div>Login</div>
            </div>

            <div className='nav-section'>
                <img width={150}
                    src="https://d33wubrfki0l68.cloudfront.net/d828ee1d8d02934a37ad97ea22242a5f99575dec/1e494/assets/img/manufacturers/hot-toys.png"
                    alt="hottoys-logo"
                />
            </div>

            <div className="menu-area">

                <ul className='menu-list'>
                    {menuList.map(menu => (
                        <li>{menu}</li>
                    ))}
                </ul>

            </div>
            <div className="menu-search">
                <div className='search-box'>
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    <input type="text" onKeyDown={(e) => search(e)} placeholder='search' />

                </div>
            </div>
        </div>
    )
}

export default Navbar