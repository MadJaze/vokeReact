import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //Iconos, biblioteca em geral
import { faLinkedin, faSquareFacebook, faSquareYoutube } from '@fortawesome/free-brands-svg-icons'; //Brands icons
import img from '../recursos/reclame_aqui1.png';
import img2 from '../recursos/reclame_aqui2.png';

const Footer = () => {

return (

<footer>


        <div id="footer-container-main">

          <div class="footer-container-sub"> 
            
            <div class="footer-sub-item-left">

            <h1>Junte-se a nossa newsletter</h1>
            <p>Enviaremos a você novidades uma vez por semana. Sem spam.</p>
              <img src={img} alt="copia-proibida1" width='140' className='forbidden-copy-image1'/>
              <img src={img2} alt="copia-proibida2" width='140' className='forbidden-copy-image2'/>
            </div>

            <div class="footer-sub-item-right-main">

            <div class="footer-sub-item-right1">

            <input placeholder='Digite seu primeiro nome' class="input_inscreva-se_footer"></input>
            <input placeholder='Digite seu E-mail' class="input_inscreva-se_footer"></input>
            <button id="inscreva-se_button">Inscreva-se</button>
            
            <div className='forbidden-images-tablet-mode'>
              <img src={img} alt="copia-proibida1" width='140' className='forbidden-copy-image-tablet-mode1'/>
              <img src={img2} alt="copia-proibida2" width='140' className='forbidden-copy-image-tablet-mode2'/>
              </div>
            </div>

            <div class="footer-sub-item-right2">
           
            
            <ul class="options-footer"> 
              <h2>Institucional</h2>
            <li>Sobre nós</li>
            <li>Soluções</li>
            <li>Fale Conosco</li>
            <li>Loja Física</li>    
            <li>Perguntas Frecuentes</li>
            </ul>

            <ul class="options-footer"> 
              <h2> Políticas</h2>
            <li>Política de troca e devolução</li>
            <li>Política de entrega</li>
            <li>Política de pagamento</li>
            <li>Política de garantía</li>
            </ul>

             <ul class="options-footer"> 
              <h2>Privacidade</h2>
            <li>Avisos de privacidade</li>
            <li>Política de cookies</li>
            <li>Termos de uso</li>
               
            </ul>

 
            
            
            </div>


            </div>

            
         

         </div>
         <div class="hr">
          </div>

          <div class="last-div-footer">

           <div>
          <p>AGASUS SEMINOVOS. | CNPJ 18.638.476/0001-18 - (31) 97222 5503 © 2025 Voke. Todos os direitos reservados.</p>
          </div>
          
          <div class='last-div-footer-icons'>
          <ul>
          <li><FontAwesomeIcon icon={faLinkedin} /> </li>
          <li><FontAwesomeIcon icon={faSquareFacebook} /> </li>
          <li><FontAwesomeIcon icon={faSquareYoutube} /> </li>
          </ul>
          </div>
          </div>
        </div>

     





</footer>


)

};


export default Footer;