import '../App.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight, faChevronLeft, faBars, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; 
import { useContext } from 'react';
import { ThemeContext } from './themeContext.js';

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);



  return (


    <header  
    
  
    
    >
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

      <div className="ev-header__columns"
      
      style = {{ backgroundColor: isDarkMode ? '#121212' : '#fff',
      color: isDarkMode ? "#fff" : "#000",
      }}
      >
        <div className="container" 
        
         style = {{ backgroundColor: isDarkMode ? '#121212' : '#fff',
      color: isDarkMode ? "#fff" : "#000",
      }}
        >
          <button onClick={() => setMenuOpen(true)} className='barras-tablet-mode'
            
style = {{ backgroundColor: isDarkMode ? '#0D1117' : '#EAECF0',
      color: isDarkMode ? 'white' : 'black'
      }}>
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
            <FontAwesomeIcon icon={faMoon}  className='nocturne-mode' onClick={toggleTheme}/>
          </div>
        </div>
      </div>

    {/* Container Search modo Tablet */}

      <div className='header-tablet-mode' >

          <input placeholder="Encontre o que precisa" className="search-field-tablet-mode" />

      </div>



      <div className="container-menu-rosa" 
      
      style = {{ 
      backgroundColor: isDarkMode ? "#008000" : "#FE97C5",
        color: isDarkMode ? "white" : "black",
      }}

      
     >
        <div className="ev-header__menu" 
        
         style = {{ 
      backgroundColor: isDarkMode ? "#008000" : "#FE97C5",
   
      }}>
          <div className="icon-menu-toggle" >
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

<div className='menu-special-tablet'

style = {{ backgroundColor: isDarkMode ? 'black' : '#fff',
     
      }}
>

<div className='bemvindo-tablet-mode'

style = {{ backgroundColor: isDarkMode ? '#0D1117' : '#EAECF0',
      
      }}

>

<p

style = {{ backgroundColor: isDarkMode ? '#0D1117' : '#EAECF0',
      
      }}
>Olá, Seja bemvindo(a)</p>
<p

style = {{ backgroundColor: isDarkMode ? '#0D1117' : '#EAECF0',
      
      }}
>Minha Conta</p>

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
