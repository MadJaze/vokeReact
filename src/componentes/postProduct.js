import { useState, useEffect } from "react";
import  { addProduct } from './api.js'
import './postProduct.css'
import {useContext} from 'react';
import { ThemeContext } from './themeContext.js';

export default function ProductForm2( { onProductAdded } ) {
  
  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [image, setImage] = useState("");
  const [originalPrice, setOriginalPrice] = useState();
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [inStock, setInStock] = useState();
  const [liquidaTech, setLiquidaTech] = useState(false);
  const [brand, setBrand] = useState("");


  //modo oscuro 

   const { isDarkMode } = useContext(ThemeContext);


     

  const handleSubmit = async (e) => {
    
  alert("Produto adicionado com sucesso")
e.preventDefault();
const newProduct = { name, sku, image, originalPrice, condition, color, inStock, liquidaTech, brand  };
await addProduct(newProduct);
onProductAdded() //Isso aqui vai ser igual ao fetch products  

setName(""); setSku(""); setImage(""); setOriginalPrice(); setCondition("");
setColor(""); setInStock(); setLiquidaTech(false); setBrand("");
  };


  
    useEffect(() => {
       if (isDarkMode) {
         document.body.classList.add('dark-mode');
       } else {
         document.body.classList.remove('dark-mode');
       }
     }, [isDarkMode]);


    return (
    <div className="product-form-container">
      <div className="product-form-card">
        <h2>Cadastrar Produto</h2>
        <form className="product-form" onSubmit={handleSubmit}>
          <div className="product-form-row">
            <div className="form-group">
              <label className="label-margin-bottom">Nome do Produto *</label>
              <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome do Produto"
                required
              />
            </div>
            <div className="form-group">
              <label  className="label-margin-bottom">SKU *</label>
              <input 
                value={sku}
                onChange={(e) => setSku(e.target.value)}
                placeholder="SKU do Produto"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label  className="label-margin-bottom">Imagem do Produto *</label>
            <input 
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Imagem do Produto (link)"
              required className="full-width-input"
            />
          </div>

          <div className="product-form-row">
            <div className="form-group">
              <label  className="label-margin-bottom">Preço Original *</label>
              <input 
                type="number"
                value={originalPrice || ""}
                onChange={(e) => setOriginalPrice(Number(e.target.value))}
                placeholder="Preço original do Produto"
                step="0.01"
                min="0"
                required
              />
            </div>
            <div className="form-group">
              <label  className="label-margin-bottom">Cor *</label>
              <input 
                value={color}
                onChange={(e) => setColor(e.target.value)}
                placeholder="Cor do produto"
              />
            </div>
          </div>

          <div className="product-form-row">
            <div className="form-group">
              <label  className="label-margin-bottom">Condição *</label>
              <select 
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                required
              >
                <option value="">Selecione a condição</option>
                <option value="Bom">Bom</option>
                <option value="Muito Bom">Muito Bom</option>
              </select>
            </div>
            <div className="form-group">
              <label  className="label-margin-bottom">Quantidade em Estoque *</label>
              <input 
                type="number"
                value={inStock || ""}
                onChange={(e) => setInStock(Number(e.target.value))}
                placeholder="Quantidade do Produto"
                min="0"
                required
              />
            </div>
          </div>

          <div className="product-form-checkbox">
            <label >LiquidaTech</label> 
            <input 
              type="checkbox"
              checked={liquidaTech}
              onChange={(e) => setLiquidaTech(e.target.checked)}
              id="liquidaTech"
             
            />
         
          </div>

          <fieldset className="product-form-fieldset">
            <legend >Marca *</legend>
            <div className="product-form-radio-container">
              <div className="product-form-radio-group">
                <input 
                  type="radio"
                  name="brand"
                  value="apple"
                  checked={brand === "apple"}
                  onChange={(e) => setBrand(e.target.value)}
                  id="apple"
                  style={{ width: '20px', marginBottom: '10px' }}
                />
                <label htmlFor="apple">Apple</label>
              </div>

              <div className="product-form-radio-group">
                <input 
                  type="radio"
                  name="brand"
                  value="samsung"
                  checked={brand === "samsung"}
                  onChange={(e) => setBrand(e.target.value)}
                  id="samsung"
                  style={{ width: '20px', marginBottom: '10px' }}
                />
                <label htmlFor="samsung">Samsung</label>
              </div>

              <div className="product-form-radio-group">
                <input 
                  type="radio"
                  name="brand"
                  value="lenovo"
                  checked={brand === "lenovo"}
                  onChange={(e) => setBrand(e.target.value)}
                  id="lenovo"
                  style={{ width: '20px', marginBottom: '10px' }}
                />
                <label htmlFor="lenovo">Lenovo</label>
              </div>

              <div className="product-form-radio-group">
                <input 
                  type="radio"
                  name="brand"
                  value="dell"
                  checked={brand === "dell"}
                  onChange={(e) => setBrand(e.target.value)}
                  id="dell"
                  style={{ width: '20px', marginBottom: '10px' }}
                />
                <label htmlFor="dell">Dell</label>
              </div>
            </div>
          </fieldset>

          <button type="submit">Agregar Produto</button>
        </form>
      </div>
    </div>
  );
}