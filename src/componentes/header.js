import '../App.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight, faChevronLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; 

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);




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
          <button onClick={() => setMenuOpen(true)} className='barras-tablet-mode'>
          <FontAwesomeIcon icon={faBars}  className='barras-tablet-mode'/>
          </button>
          <img
            className="imagem-logo"
            src="https://www.voke.shop/on/demandware.static/Sites-Voke-Site/-/default/dwf3e412cb/images/voke-logo-255.png"
            alt="logo"
          />

          <input placeholder="Encontre o que precisa" className="search-field" />
          <div className="coracao-carrinho">
              <Link to="/cadastraProduto">
            <FontAwesomeIcon icon={faHeart} />
            </Link>
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

      {/* MENU Search modo Tablet */} 

      {menuOpen && (
<>

<div className='overlay' onClick={() => setMenuOpen(false)}></div>

<div className='menu-special-tablet'>

<div className='bemvindo-tablet-mode'>

<p>Olá, Seja bemvindo(a)</p>
<p>Minha Conta</p>

</div>

<h3>Departamentos</h3>

<ul>

<li>Notebooks</li>
<hr></hr>
<li>Computadores</li>
<hr></hr>
<li>Smartphone</li>
<hr></hr>
<li>Tablet</li>
<hr></hr>
<li>Monitor</li>
<hr></hr>
<li>Accesórios e Periféricos</li>
<hr></hr>
<li>Apple</li>
<hr></hr>
<li>Chromebook</li>
<hr></hr>
<li>Notebook Gamer</li>
<hr></hr>




</ul>

<div className='sua-empresa-section-tablet'>

  <h4>Para sua Empresa</h4>
<p>Temos as melhores soluções de gestão de hardwares para sua empresa. confira!</p>


</div>

<div className='lista-de-link-tablet-mode'>

<ul>

<li className='brand-list-tablet-mode' onClick={()=> setMenuOpen(false)}><Link to="/">Liquida Tech</Link></li>
<li className='brand-list-tablet-mode' onClick={()=> setMenuOpen(false)}><Link to="/apple">Apple</Link></li>
<li className='brand-list-tablet-mode' onClick={()=> setMenuOpen(false)} ><Link to="/samsung">Samsung</Link></li>
<li className='brand-list-tablet-mode' onClick={()=> setMenuOpen(false)}><Link to="/lenovo">Lenovo</Link></li>
<li className='brand-list-tablet-mode' onClick={()=> setMenuOpen(false)}><Link to="/dell">Dell</Link></li>

</ul>

</div>

</div>

</>


      )}


     
    </header>
  );
};

export default Header;
