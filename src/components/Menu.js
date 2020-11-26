import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {

    return (
        <div>
            <ul className='nav nav-tabs'>
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/todo">Todo</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/news">News</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/AddUser">회원등록</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/UserList">회원리스트</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Youtube">Youtube</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;