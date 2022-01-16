import '../scss/Navbar.scss';
import LogoSrc from '../images/logo.png';
import { useState } from 'react';

export const Navbar = ({ onSearch, onReset }) => {
  const [searchFilter, setSearchFilter] = useState('');

  return (
    <div className='lol-navbar text-white'>
      <div className='navbar-home'>
        <img src={LogoSrc} alt='LOL' className='lol-logo' />
        <h5 className='lol-title' onClick={onReset}>
          League of Legends WIKI
        </h5>
      </div>

      <div className='d-flex navbar-search-field'>
        <div className='input-group input-group-sm'>
          <input
            type='text'
            className='form-control'
            placeholder='Champion'
            aria-label='Champion'
            aria-describedby='basic-addon1'
            onChange={e => setSearchFilter(e.target.value)}
          />
        </div>

        <button className='btn btn-sm btn-dark-gold' onClick={() => onSearch(searchFilter)}>
          <i className='bi bi-search'></i>
        </button>
      </div>
    </div>
  );
};
