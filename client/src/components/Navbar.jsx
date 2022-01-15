import '../scss/Navbar.scss';
import LogoSrc from '../images/logo.png';

export const Navbar = () => {
  return (
    <>
      <div className='lol-navbar text-white'>
        <img src={LogoSrc} alt='LOL' className='lol-logo' />
        <h5 className='lol-title'>League of Legends WIKI</h5>
      </div>
      <div className='lol-navbar-spacer' />
    </>
  );
};
