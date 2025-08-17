import { useState } from "react";
import  { addProduct } from './api.js'


export default function ProductForm( { onProductAdded } ) {

const [name, setName] = useState("");
const [sku, setSku ] = useState("");
const [ image, setImage ] = useState("");
const [originalPrice, setOriginalPrice] = useState();
const [ color , setColor ] = useState("");
const [condition, setCondition] = useState("");
const [ inStock, setInStock ] = useState();
const [ liquidaTech, setLiquidaTech ] = useState(false);
const [ brand, setBrand ] = useState("");


const handleSubmit = async (e) => {

e.preventDefault();
const newProduct = { name, sku, image, originalPrice, condition, color, inStock, liquidaTech, brand  };
await addProduct(newProduct);
onProductAdded() //Isso aqui vai ser igual ao fetch products  

setName(""); setSku(""); setImage(""); setOriginalPrice(0); setCondition("");
setColor(""); setInStock(); setLiquidaTech(false); setBrand("");



}


return (


    <form onSubmit={handleSubmit}>

    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome do Produto"/>
    <input value={sku} onChange={(e) => setSku(e.target.value)} placeholder="SKU do Produto"/> 
    <input value={image}  onChange= {(e) => setImage(e.target.value)} placeholder="Imagem do Produto (link)"/ >
    <input value={originalPrice} onChange ={(e) => setOriginalPrice(Number(e.target.value))} placeholder="Preço original do Produto" />
    <input value={condition} onChange={(e) => setCondition(e.target.value)} placeholder="Condição do Produto"/>
    <input value = {inStock} onChange={(e) => setInStock(Number(e.target.value))} placeholder="Quantidade do Produto"/>
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
        checked={brand === "apple"} 
        onChange={(e) => setBrand(e.target.value)} 
      /> Apple
    </label>
    <label>
      <input 
        type="radio" 
        name="brand" 
        value="samsung" 
        checked={brand === "samsung"} 
        onChange={(e) => setBrand(e.target.value)} 
      /> Samsung
    </label>
    <label>
      <input 
        type="radio" 
        name="brand" 
        value="lenovo" 
        checked={brand === "lenovo"} 
        onChange={(e) => setBrand(e.target.value)} 
      /> Lenovo
    </label>
    <label>
      <input 
        type="radio" 
        name="brand" 
        value="dell" 
        checked={brand === "dell"} 
        onChange={(e) => setBrand(e.target.value)} 
      /> Dell
    </label>
  </fieldset>

      <button type="submit">Agregar Produto</button>
    </form>



)




}