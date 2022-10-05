import React from 'react';
import "./navbar.css";
import { ReactComponent as Profileicn } from './profile-icn.svg';
import { ReactComponent as Searchicn } from './search-icn.svg';
import { ReactComponent as Carticn } from './cart-icn.svg';
import { ReactComponent as Hearticn } from './heart-icn.svg';
import { Link } from 'react-router-dom';
const Navbar = (props) => {
  
  return (
    <div className='topnav'>
        <Link to="/" className='site-title' style={{fontSize:"20px"}}>AccioJob</Link>
       
       <div className='topnav-left'>
                <Link to="/home">Home</Link>
              <Link to="/shop">Shop</Link>
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/pages">Pages</Link>

       </div>
           
            <div className='topnav-right'>
                
                    <Link to="/login">
                        
                      <span style={{marginRight:"4px",}}><Profileicn /></span>
                        Login / Register
                    </Link>
                    <Link to="/search">
                        <Searchicn />
                    </Link>
                    <Link to="/cart">
                          <Carticn />
                         <span>{props.count}</span> 
                    </Link>
                  <Link to="/wishlist">
                    <Hearticn />
                    <span>1</span>
                    
                  </Link>
                
            </div>
            
        
    </div>
  )
}

export default Navbar