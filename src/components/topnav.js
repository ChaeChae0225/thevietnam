import './topnav.css';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { SiNaver } from 'react-icons/si';

import { Link } from 'react-router-dom';

function Nav({ isNavOpen, handleNavToggle }) {
  return (
    <div className='nav_overlay'>
      <div className='nav_box'>
        <div className='close_icon'>
          {isNavOpen ? (
            <AiOutlineClose size='36px' onClick={handleNavToggle} />
          ) : null}
        </div>
        <ul>
          <Link className='link_line' to='/main'>
            <li>더빛남</li>
          </Link>
          <Link className='link_line' to='/business'>
            <li>창업안내</li>
          </Link>
          <Link className='link_line' to='/customer'>
            <li>고객장소</li>
          </Link>
          <div className='nav_position'>
            <Link
              className='link_line'
              to='https://www.instagram.com/the_viet_nam_/'
            >
              <li className='nav_instagram'>
                <BsInstagram />
              </li>
            </Link>
            <Link to='https://map.naver.com/v5/search/%EB%8D%94%EB%B9%9B%EB%82%A8/place/1145587166?placePath=%3Fentry=pll%26from=nx%26fromNxList=true&c=15,0,0,0,dh'>
              <li className='nav_naver'>
                <SiNaver />
              </li>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
