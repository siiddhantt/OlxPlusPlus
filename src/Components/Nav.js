import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
const Nav = ({ isLoggedIn }) => {
    let fStyle={
        fontFamily:'Nunito',
        fontWeight:'bold',
        textSize:'small'
    }
    return (
        <nav>
            <div className='logo'><Link to="/">Olx++</Link></div>
            <div className='search'><AiOutlineSearch/>

            <input type='text' className='text-box' placeholder='Search products..' />
            </div>
            <div>
            {!isLoggedIn &&
                <>    <Link to='/login' style={fStyle}>Login</Link>
                    <Link to='/signup' style={fStyle}>Sign-Up</Link>
                    </>
                }
            <Link to='/cart' style={fStyle}>Cart</Link>
                </div>
        </nav>
    )
}

export default Nav