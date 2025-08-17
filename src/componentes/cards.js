import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, deleteProduct } from "./api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import Modal from 'react-modal';
import './cards.css'


export default function Cards() {

// 1. Obter do JSON os produtos da loja usando useState 

const [products, setProducts] = useState([]);


//Filtro por marca (brand) Esse hook aqui accede dinamicamente aos parámetros do db.json (maravilha)

const { brand } = useParams(); 
 


// 2. Função para ser chamada no useEffect para carregar produto na tela 

const fetchProducts = async () => {

    const res = await getProducts(brand); //Extrair os produtos do JSON e uma vez feito...
    console.log("respuesta", res.data);
    setProducts(res.data);
}

// 3. Implementalção do useEffect


useEffect (() => {

fetchProducts()


}, [brand])


  const handleDelete = async (id) => {
    try {
        await deleteProduct(id); // Espera que termine
        await fetchProducts();   // Luego actualiza
    } catch (error) {
        console.error("Erro ao deletar o contato:", error);
    }
};



////////////////////////////MODALS////////////////////////////////








////////////////////END


return (


<div className="cards-container">
 
    <div className="ordenador">
       
        <p>Ordenar por</p>
        <select>

        <option value="default">Mais Relevantes</option> 
        <option value="default">Preço menor a maior</option> 
        <option value="default">Preço maior a menor</option> 
        <option value="default">Nome de A -Z</option> 
        <option value="default">Nome de Z -A</option>
        <option value="default">Marca de A -Z</option>
        <option value="default">Marca de Z -A</option>
        <option value="default">Populares</option>
        <option value="default">Mais vendidos</option>

        </select>
        </div>

<div className="cards-linksinfo">

         
        
                         {products.map((product) => {


                

                    return (

<div className='proper_card' key={product.id}> 

            <div className='ev_cards_inStock_container'> 

                 <div className='ev_cards_inStock'>

                             <p>Restam {product.inStock}</p>

                </div>
                 <div className='ev_cards_inStock_Icons'>
                
                <div class="product-actions">

                           <button class="edit-btn"> <FontAwesomeIcon icon={faPenToSquare} onClick={ () => handleDelete(product.id) } className='heart_icon' /></button>
 
                             <button class="delete-btn" onClick={ () => handleDelete(product.id) }>Deletar</button>

                             </div>
                </div>
     </div>

    

 <img src={product.image} width="270" alt={product.brand} className='product_card_image'></img>

    <div className='product_card_condition'>   
        <img src="https://www.voke.shop/on/demandware.static/Sites-Voke-Site/-/default/dw4f718762/images/icons/badge-2.svg"
        width="25" alt="conditional issue"></img>
    <p> {product.condition} </p>
    </div>

                <p className='product_card_name'>{product.name}</p>
                       

            <div className='product_card_price'>
                
                    <p>R${product.originalPrice}</p>

                    <div className='anyOff_section'> 

                        <p>Baixou 14%</p>

                    </div>
                
             </div>              

            <div className='price_off_section'> 

                    <h6 className='symbol'>R$</h6>
                    <p>R$816,05</p>
                    <h6 className='pix_boleto'>no PIX / Boleto</h6> 

            </div>


            <div className='parcela' style={{fontSize:13}}>em até <strong>10x de R$ 85,90 </strong>sem juros. </div>
</div>

        
)

        })}




</div>

</div>

)




};