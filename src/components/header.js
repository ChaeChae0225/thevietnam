import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import './header.css';
import topLogo from '../assets/toplogo.png';
import Nav from './topnav';
import { Link } from 'react-router-dom';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className='content_box'>
      <div className='content'>
        <h1 className='header_title'>
          <Link to='/'>
            <img src={topLogo} alt='topLogo' id='topLogo' />
          </Link>
        </h1>
        <div className='nav' onClick={handleNavToggle}>
          {isNavOpen ? null : <AiOutlineMenu size='36px' />}
        </div>
      </div>
      {isNavOpen && (
        <Nav isNavOpen={isNavOpen} handleNavToggle={handleNavToggle} />
      )}
    </div>
  );
}

export default Header;
