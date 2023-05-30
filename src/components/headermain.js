import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import './headermain.css';
import Nav from './topnav';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className='content_box2'>
      <div className='content'>
        <h1 className='header_title'> </h1>
        <div className='nav2' onClick={handleNavToggle}>
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
