
import Cards from './cards'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import {useContext} from 'react';
import { ThemeContext } from './themeContext.js';


function MenuAside() {


    const { isDarkMode } = useContext(ThemeContext);



    return (
<div>


        {/*MainImage marca={marca} imagem={imagem}/*/}
        <div className="body-container" 
        
        style={ { backgroundColor: isDarkMode ? "#121212" : "#F4F3ED",
        color: isDarkMode ? "#fff" : "#000",
        marginBottom: isDarkMode ? '0px' : '20px',

        }}      
        >

        <div className="aside-container">

            <h2
            style={{color: isDarkMode ? "#fff" : "#000",}}
            >Filtrar por:</h2>
            {/* Aqui você pode adicionar os cartões que desejar */}

            <p><strong>Preço</strong></p>
            
            <hr></hr>
            <ul
            style={{color: isDarkMode ? "#fff" : "#000",}}
            >
            <li><FontAwesomeIcon icon={faCircle}/> Até R$ 500</li>
            <li><FontAwesomeIcon icon={faCircle}/> R$ 1000 - R$ 1500</li>
            <li><FontAwesomeIcon icon={faCircle}/> R$ 1500 - R$ 2000</li>
            <li><FontAwesomeIcon icon={faCircle}/> R$ 2000 - R  $ 3000</li>
            <li><FontAwesomeIcon icon={faCircle}/> Acima de R$ 3000  </li>   

            </ul>
             <p><strong>Condição</strong></p>
             <hr></hr>
             <ul
             
             style={{color: isDarkMode ? "#fff" : "#000",}}>
            <li><FontAwesomeIcon icon={faSquare}/> Bom</li>
            <li><FontAwesomeIcon icon={faSquare}/> Muito Bom</li>

            </ul>

              <p><strong>Tipo</strong></p>
              <hr></hr>
             <ul 
             
             style={{color: isDarkMode ? "#fff" : "#000",}}>
            <li><FontAwesomeIcon icon={faCircle}/> Liquida Tech</li>
            </ul>
            <hr></hr>
            </div>

{/* Colocar em outro componente CARDS*/}


<Cards />



        </div>

</div>
    );
}


export default MenuAside;