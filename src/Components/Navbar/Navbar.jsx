
import { Link, NavLink } from 'react-router-dom'
import imgNav from '../../../src/assets/logo.png'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu  = () => {
    setOpen(prev => !prev);
  }

  const closeNav = ()=>{
    setOpen(false);
  }
  
  return (
    <>
      <nav id="header">
        <Link to="#"> <img src={imgNav} alt="imgNav"/> </Link>
        
        <div>
            <ul id="navBar" className={open ? "active" : ""}>
             <li><NavLink onClick={closeNav} to="/">Home</NavLink></li>
             <li><NavLink onClick={closeNav} to="/Shop">Shop</NavLink></li>
             <li><NavLink onClick={closeNav} to="/Blog">Blog</NavLink></li>
             <li><NavLink onClick={closeNav} to="/About">About</NavLink></li>
             <li><NavLink onClick={closeNav} to="/Contact">Contact</NavLink></li>
             <li><NavLink onClick={closeNav} to="/Cart" id="lg_bag">
                <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                </NavLink>
            </li>
             <button id="close" onClick={closeNav } className='btnNavbar'>
              <i className="fa-solid fa-xmark"></i>
             </button>
            </ul>
        </div>

        <div id="mobil">
            <Link to="/Cart">
              <i className="fa-sharp fa-solid fa-cart-shopping"></i>
            </Link>
            <button id="bar" onClick={toggleMenu } className="btnNavbar">
              <i className="fas fa-outdent"></i>
            </button>
        </div>

    </nav>

    </>
  )
}

