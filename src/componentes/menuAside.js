
import Cards from './cards'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

function MenuAside() {






    return (
<div>


        {/*MainImage marca={marca} imagem={imagem}/*/}
        <div className="body-container">

        <div className="aside-container">

            <h2>Filtrar por:</h2>
            {/* Aqui você pode adicionar os cartões que desejar */}

            <p><strong>Preço</strong></p>
            
            <hr></hr>
            <ul>
            <li><FontAwesomeIcon icon={faCircle}/> Até R$ 500</li>
            <li><FontAwesomeIcon icon={faCircle}/> R$ 1000 - R$ 1500</li>
            <li><FontAwesomeIcon icon={faCircle}/> R$ 1500 - R$ 2000</li>
            <li><FontAwesomeIcon icon={faCircle}/> R$ 2000 - R  $ 3000</li>
            <li><FontAwesomeIcon icon={faCircle}/> Acima de R$ 3000  </li>   

            </ul>
             <p><strong>Condição</strong></p>
             <hr></hr>
             <ul>
            <li><FontAwesomeIcon icon={faSquare}/> Bom</li>
            <li><FontAwesomeIcon icon={faSquare}/> Muito Bom</li>

            </ul>

              <p><strong>Tipo</strong></p>
              <hr></hr>
             <ul>
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