import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight, faChevronLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; 

const Header = () => {
  return (
    <header>
      <div className="ev-topBanner">
        <button className="header-slider">
          <FontAwesomeIcon icon={faChevronLeft} className="icon-slider" />
        </button>

        
         
          <p className="text-header-slider">  <FontAwesomeIcon icon={faCircleUser} 
          className="icon-profile" style={{marginRight:5}} />      Frete Gratis para todo o Brasil</p>
       

        <button className="header-slider">
          <FontAwesomeIcon icon={faChevronRight} className="icon-slider" />
        </button>
      </div>

      <div className="ev-header__columns">
        <div className="container">
          <FontAwesomeIcon icon={faBars}  className='barras-tablet-mode'/>
          <img
            className="imagem-logo"
            src="https://www.voke.shop/on/demandware.static/Sites-Voke-Site/-/default/dwf3e412cb/images/voke-logo-255.png"
            alt="logo"
          />

          <input placeholder="Encontre o que precisa" className="search-field" />
          <div className="coracao-carrinho">
            <FontAwesomeIcon icon={faHeart} />
            <Link to="/login">
            <FontAwesomeIcon icon={faBars}  className='barras'/>
            </Link> 
            <img
              src="https://cdn-icons-png.flaticon.com/512/1124/1124199.png"
              width="20"
              alt="carrinho"
            />
          </div>
        </div>
      </div>

    {/* Container Search modo Tablet */}

      <div className='header-tablet-mode'>

          <input placeholder="Encontre o que precisa" className="search-field-tablet-mode" />

      </div>



      <div className="container-menu-rosa">
        <div className="ev-header__menu">
          <div className="icon-menu-toggle">
            <FontAwesomeIcon icon={faBars} />
            <p>menú</p>
          </div>

          <div className="ev-header__menu-list-container">
            <ul className="ev-header__menu-list">
              <li className="ev-header__menu-item">
                <Link to="/">Liquida Tech</Link>
              </li>
              <div className="ev-header_separator"></div>
              <li className="ev-header__menu-item">
                <Link to="/apple">Loja Apple</Link>
              </li>
              <div className="ev-header_separator"></div>
              <li className="ev-header__menu-item">
                <Link to="/samsung">Loja Samsung</Link>
              </li>
              <div className="ev-header_separator"></div>
              <li className="ev-header__menu-item">
                <Link to="/lenovo">Loja Lenovo</Link>
              </li>
              <div className="ev-header_separator"></div>
              <li className="ev-header__menu-item">
                <Link to="/dell">Loja Dell</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
