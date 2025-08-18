import { useState } from "react";
import  { addProduct } from './api.js'
import { width } from "@fortawesome/free-brands-svg-icons/fa11ty";

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

  const handleSubmit = async (e) => {
    
  alert("Produto adicionado com sucesso")
e.preventDefault();
const newProduct = { name, sku, image, originalPrice, condition, color, inStock, liquidaTech, brand  };
await addProduct(newProduct);
onProductAdded() //Isso aqui vai ser igual ao fetch products  

setName(""); setSku(""); setImage(""); setOriginalPrice(); setCondition("");
setColor(""); setInStock(); setLiquidaTech(false); setBrand("");
  };

  const styles = {
  
   
  
    mainContent: {
        backgroundColor: '#f3f4f6',
     width: "90%", 
     
      margin: '0 auto',
     
     
    },
    card: {
      backgroundColor: 'white',
    width: '80%',
    margin: '0 auto',
      borderRadius: '0.5rem',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
   
    },
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#1e40af',
      marginBottom: '1.5rem',
      marginTop: '0'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    formRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column'
    },
    label: {
      display: 'block',
      fontSize: '0.875rem',
      padding: '0', 
      fontWeight: '500',
      color: '#374151',
      marginBottom: '0.65rem'
    },
    input: {
      width: '90%',
     
      padding: '0.5rem 0.75rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.375rem',
      fontSize: '1rem',
      transition: 'all 0.2s'
    },
    select: {
      width: '100%',
      padding: '0.5rem 0.75rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.375rem',
      fontSize: '1rem',
      backgroundColor: 'white',
      transition: 'all 0.2s'
    },
    checkboxContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.75rem',
      backgroundColor: '#f9fafb',
      borderRadius: '0.375rem',
      border: '1px solid #e5e7eb'
    },
    checkbox: {
      width: '1rem',
      height: '1rem',
      accentColor: '#1e40af'
    },
    checkboxLabel: {
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#374151',
      margin: '0'
    },
    fieldset: {
      border: '1px solid #d1d5db',
      borderRadius: '0.375rem',
      padding: '1rem',
      margin: '0'
    },
    legend: {
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#374151',
      padding: '0 0.5rem'
    },
    radioContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '0.5rem',
      marginTop: '0.5rem'
    },
    radioGroup: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    radio: {
      width: '1rem',
      height: '1rem',
      accentColor: '#1e40af'
    },
    radioLabel: {
      fontSize: '0.875rem',
      color: '#374151',
      margin: '0'
    },
    button: {
      width: '100%',
      padding: '0.75rem',
      border: 'none',
      borderRadius: '0.375rem',
      fontWeight: '500',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
      backgroundColor: '#1e40af',
      color: 'white',
      marginTop: '1rem'
    },
    fullWidth: {
      gridColumn: '1 / -1'
    }
  };

  // Media queries usando JavaScript
  const isMobile = window.innerWidth <= 768;

  const responsiveStyles = {
    mainContent: {
      ...styles.mainContent,
      padding: isMobile ? '1rem' : '1.5rem'
    },

    input: {
      ...styles.input,
      flexDirection: isMobile ?  'columns': 'row' 


    },

    card: {
      ...styles.card,
      padding: isMobile ? '2rem' : '1.5rem'
    },
    formRow: {
      ...styles.formRow,
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr'
    },
    radioContainer: {
      ...styles.radioContainer,
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)'
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
    

      {/* Main Content */}
      <div style={responsiveStyles.mainContent}>
        <div style={responsiveStyles.card}>
          <h2 style={styles.cardTitle}>Cadastrar Produto</h2>
          
          <div style={styles.form}>
            <div style={responsiveStyles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Nome do Produto *</label>
                <input 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  placeholder="Nome do Produto"
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>SKU *</label>
                <input 
                  value={sku} 
                  onChange={(e) => setSku(e.target.value)} 
                  placeholder="SKU do Produto"
                  style={styles.input}
                  required
                /> 
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={ styles.label }>Imagem do Produto *</label>
              <input 
                value={image}  
                onChange={(e) => setImage(e.target.value)} 
                placeholder="Imagem do Produto (link)"
                style={{... styles.input , width:'95%'  }}
                required
              />
            </div>

            <div style={responsiveStyles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Preço Original *</label>
                <input 
                  type="number"
                  value={originalPrice || ""} 
                  onChange={(e) => setOriginalPrice(Number(e.target.value))} 
                  placeholder="Preço original do Produto"
                  style={styles.input}
                  step="0.01"
                  min="0"
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Cor</label>
                <input 
                  value={color} 
                  onChange={(e) => setColor(e.target.value)} 
                  placeholder="Cor do produto"
                  style={styles.input}
                />
              </div>
            </div>

            <div style={responsiveStyles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Condição *</label>
                <select 
                  value={condition} 
                  onChange={(e) => setCondition(e.target.value)}
                  style={styles.select}
                  required
                >
                  <option value="">Selecione a condição</option>
                  <option value="Bom">Bom</option>
                  <option value="Muito Bom">Muito Bom</option>
                
                </select>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Quantidade em Estoque *</label>
                <input 
                  type="number"
                  value={inStock || ""} 
                  onChange={(e) => setInStock(Number(e.target.value))} 
                  placeholder="Quantidade do Produto"
                  style={styles.input}
                  min="0"
                  required
                />
              </div>
            </div>

            <div style={styles.checkboxContainer}>
              <input 
                type="checkbox" 
                checked={liquidaTech} 
                onChange={(e) => setLiquidaTech(e.target.checked)}
                style={styles.checkbox}
                id="liquidaTech"
              />
              <label htmlFor="liquidaTech" style={styles.checkboxLabel}>
                LiquidaTech?
              </label>
            </div>

            <fieldset style={styles.fieldset}>
              <legend style={styles.legend}>Marca *</legend>
              <div style={responsiveStyles.radioContainer}>
                <div style={styles.radioGroup}>
                  <input 
                    type="radio" 
                    name="brand" 
                    value="apple" 
                    checked={brand === "apple"} 
                    onChange={(e) => setBrand(e.target.value)}
                    style={styles.radio}
                    id="apple"
                  />
                  <label htmlFor="apple" style={styles.radioLabel}>Apple</label>
                </div>
                
                <div style={styles.radioGroup}>
                  <input 
                    type="radio" 
                    name="brand" 
                    value="samsung" 
                    checked={brand === "samsung"} 
                    onChange={(e) => setBrand(e.target.value)}
                    style={styles.radio}
                    id="samsung"
                  />
                  <label htmlFor="samsung" style={styles.radioLabel}>Samsung</label>
                </div>
                
                <div style={styles.radioGroup}>
                  <input 
                    type="radio" 
                    name="brand" 
                    value="lenovo" 
                    checked={brand === "lenovo"} 
                    onChange={(e) => setBrand(e.target.value)}
                    style={styles.radio}
                    id="lenovo"
                  />
                  <label htmlFor="lenovo" style={styles.radioLabel}>Lenovo</label>
                </div>
                
                <div style={styles.radioGroup}>
                  <input 
                    type="radio" 
                    name="brand" 
                    value="dell" 
                    checked={brand === "dell"} 
                    onChange={(e) => setBrand(e.target.value)}
                    style={styles.radio}
                    id="dell"
                  />
                  <label htmlFor="dell" style={styles.radioLabel}>Dell</label>
                </div>
              </div>
            </fieldset>

            <button 
              type="button"
              onClick={handleSubmit}
              style={styles.button}
            >
              Agregar Produto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}