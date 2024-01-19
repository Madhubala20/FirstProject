import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
<header>
<nav>
      <ul>
        {/* <li><Link to="/">Home</Link></li>
        <li><Link to="/cards">Cards</Link></li> 
        <li><Link to="/">Gift</Link></li>
  <li><Link to="/login">login</Link></li>*/}
  
         
        <li><Link to="/"><i class="bi bi-file-person"></i>Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/forhim">ForHim</Link></li>

      </ul>
    </nav>

</header>
</div>
    
  );
}

export default Navbar;