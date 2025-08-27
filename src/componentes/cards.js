import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, deleteProduct, addProduct, getUsers, updateProduct} from "./api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import {useContext} from 'react';
import { ThemeContext } from './themeContext.js';
import './cards.css'


export default function Cards() {

// 1. Obter do JSON os produtos da loja usando useState 

const [products, setProducts] = useState([]);

const [updateMenu, setUpdateMenu] = useState(false); //Menu pra atualizar o nosso produto.
const [productToEdit, setProductToEdit] = useState(null); // Pegar o ID que estaremos clicando 

const [name, setName] = useState("");
const [sku, setSku ] = useState("");
const [ image, setImage ] = useState("");
const [originalPrice, setOriginalPrice] = useState();
const [ color , setColor ] = useState("");
const [condition, setCondition] = useState("");
const [ inStock, setInStock ] = useState();
const [ liquidaTech, setLiquidaTech ] = useState(false);
const [ brands, setBrands ] = useState("");

  const { isDarkMode } = useContext(ThemeContext);

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

fetchProducts();


}, [brand])


  const handleDelete = async (id) => {
    try {
        await deleteProduct(id); // Espera que termine
        await fetchProducts();   // Luego actualiza
    } catch (error) {
        console.error("Erro ao deletar o contato:", error);
    }
};


/*const handleSubmit = async (e) => {

  alert("Produto adicionado com sucesso")
e.preventDefault();
const newProduct = { name, sku, image, originalPrice, condition, color, inStock, liquidaTech, brand : brands };
await addProduct(newProduct);
 

setName(""); setSku(""); setImage(""); setOriginalPrice(); setCondition("");
setColor(""); setInStock(); setLiquidaTech(false); setBrands("");



}*/



const handleUpdate = async (e) => {

  e.preventDefault();
  const updatedProduct = { 
    
    ...productToEdit,
    name, sku, image, originalPrice, condition, color, inStock, liquidaTech, brand : brands };

    alert(`ID: ${productToEdit.id}\nProducto actualizado: ${JSON.stringify(updatedProduct)}`);

    
     try{
    await updateProduct(productToEdit.id, updatedProduct);

  setUpdateMenu(false); 
  fetchProducts(); 
 


} catch(error){

  console.error("Erro ao atualizar, produto", error);

}

}



////////////////////END


return (

<div

style={ { paddingBottom: isDarkMode ? "30px" : "30px", }}
>
<div className="cards-container">
 
    <div className="ordenador" 
    style={ { color: isDarkMode ? "#e8e7e7ff": "#2c2c2d" ,}}
    
    >
       
        <p>Ordenar por</p>
        <select 
        
style={ { backgroundColor: isDarkMode ? "#2c2c2d" : "#e8e7e7ff",
  color: isDarkMode ? "#e8e7e7ff": "#2c2c2d" ,
padding: isDarkMode ? "10px": "10px",
borderRadius: isDarkMode ? "10px": "10px",}}

        >

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

<div className='proper_card' key={product.id} 

style = {{ backgroundColor: isDarkMode ? "#2c2c2d" : "#e8e7e7ff",}}
> 

            <div className='ev_cards_inStock_container'> 

                 <div className='ev_cards_inStock'>

                             <p>Restam {product.inStock}</p>

                </div>
                 <div className='ev_cards_inStock_Icons'>
                
                <div class="product-actions">


                            {/*Crud edição de produtos*/}

                           <button className="edit-btn" 
                             style={ { backgroundColor: isDarkMode ? "#2C2C2D" : "#E8E7E7", }}> <FontAwesomeIcon icon={faPenToSquare} 
                           onClick={ () => { 
                           setUpdateMenu(true); //Abre menú edição 
                           setProductToEdit(product); //Pega ID do produto 

                            setName(product.name);
                            setSku(product.sku);
                            setImage(product.image);
                            setOriginalPrice(product.originalPrice);
                            setCondition(product.condition);
                             setColor(product.color);
                            setInStock(product.inStock);
                              setLiquidaTech(product.liquidaTech);
                             setBrands(product.brand);

                           }} className='heart_icon' style={  { color: isDarkMode ? "#fff" : "#000", }}/></button>
                                                                                                
                             <button className="delete-btn" onClick={ () => handleDelete(product.id)}
                             
                               style={ { backgroundColor: isDarkMode ? "#2C2C2D" : "#E8E7E7", }}
                             ><FontAwesomeIcon icon={faTrashCan} className='heart_icon'style={  { color: isDarkMode ? "#fff" : "#000", }}/></button>

                             </div>
                </div>
     </div>

    

 <img src={product.image} width="270" alt={product.brand} className='product_card_image'
 
   style={ { boxShadow: isDarkMode ? "#121212" : "#F4F3ED",
      borderRadius: isDarkMode ? "30px" : "30px",
     marginBottom: isDarkMode ? "10px" : "10px",
    }}
 ></img>

    <div className='product_card_condition'
    
    style={ { backgroundColor: isDarkMode ? "#121212" : "#F4F3ED",
      color: isDarkMode ? "#fff" : "#000",
    }}
    
    >   
        <img src="https://www.voke.shop/on/demandware.static/Sites-Voke-Site/-/default/dw4f718762/images/icons/badge-2.svg"
        width="25" alt="conditional issue"></img>
    <p> {product.condition} </p>
    </div>

                <p className='product_card_name'
                  style={ { 
      color: isDarkMode ? "#fff" : "#000",
    }}>{product.name}</p>
                       

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

<div className='menu_update_container'>

{updateMenu && productToEdit && (

<>

<div className='overlaysub' onClick={() => setUpdateMenu(false)} 
    
    ></div>



<div className='update-menu'>

<h4> Atualizar {productToEdit.name}</h4>


    <form onSubmit={handleUpdate}>

    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome do Produto" className='input_update'/>
    <input value={sku} onChange={(e) => setSku(e.target.value)} placeholder="SKU do Produto" className='input_update'/> 
    <input value={image}  onChange= {(e) => setImage(e.target.value)} placeholder="Imagem do Produto (link)" className='input_update'/ >
    <input value={originalPrice} onChange ={(e) => setOriginalPrice(Number(e.target.value))} placeholder="Preço original do Produto" className='input_update'/>
    <input value={condition} onChange={(e) => setCondition(e.target.value)} placeholder="Condição do Produto" className='input_update'/>
    <input value = {inStock} onChange={(e) => setInStock(Number(e.target.value))} placeholder="Quantidade do Produto" className='input_update'/>
    <br></br>
    <label>
      LiquidaTech?
    <input type="checkbox" value ={liquidaTech} onChange={(e) => setLiquidaTech(e.target.checked)} placeholder="LiquidaTech?" />
    </label>
    <fieldset>
    <legend>Marca</legend>
    <label>
      <input 
        type="radio" 
        name="brand" 
        value="apple" 
        checked={brands === "apple"} 
        onChange={(e) => setBrands(e.target.value)} 
      /> Apple
    </label>
    <label>
      <input 
        type="radio" 
        name="brand" 
        value="samsung" 
        checked={brands === "samsung"} 
        onChange={(e) => setBrands(e.target.value)} 
      /> Samsung
    </label>
    <label>
      <input 
        type="radio" 
        name="brand" 
        value="lenovo" 
        checked={brands === "lenovo"} 
        onChange={(e) => setBrands(e.target.value)} 
      /> Lenovo
    </label>
    <label>
      <input 
        type="radio" 
        name="brand" 
        value="dell" 
        checked={brands === "dell"} 
        onChange={(e) => setBrands(e.target.value)} 
      /> Dell
    </label>
  </fieldset>

      <button type="submit" className='button_update'>Atualizar Produto</button>
       <button  className='button_update' onClick={() => setUpdateMenu(false)}>Cancelar</button>
    </form>

</div>









</>


)}


</div>


</div>

)




};