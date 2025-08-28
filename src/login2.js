import { useEffect, useState } from 'react';
import {addUser, getUsers} from './componentes/api';



export default function VokeComponent({login, setLogin}) {
 
const [name, setName] = useState("");
const [password, setPassword ] = useState("");


const [users, setUsers] = useState([]);

const handleSubmit = async (e) => {

  alert("Usuario adicionado com sucesso")
e.preventDefault();
const newUser = { name, password };
await addUser(newUser);
setName(""); setPassword(""); 



}
const fetchUsers = async () => {


 const res = await getUsers(); //Extrair os users do JSON ...
   
    console.log("users:", res.data);
    setUsers(res.data);

    

}

useEffect (() => {

fetchUsers();

}, [])

   

const enterSystem = () => {

const userExists = users.find(
  (user) => user.name === name && user.password === password);


if (userExists) {
  alert(`Bem-vindo ao sistema, ${name}!`);
    setLogin(!login);
} else {
  alert("Nome ou senha incorretos. Tente novamente.");}

}

  // Media queries usando JavaScript
  const isTablet = window.innerWidth <= 1024;
  const isMobile = window.innerWidth <= 768;
  const isSmallMobile = window.innerWidth <= 480;

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f3f4f6',
   
    
    
   
    },
  
    headerTitle: {
     
      fontSize: '1.5rem',
      fontWeight: 'bold',
      margin: '0'
    },
    mainContent: {
      
      maxWidth: '1152px',
      margin: '0 auto',
      padding: '1.5rem'
    },
    contentWrapper: {
      display: 'flex',
      
      gap: '2rem',
      maxWidth: '1152px',
      margin: '0 auto'
    },
    card: {
      flex: '1',
      backgroundColor: 'white',
      borderRadius: '0.5rem',
       height: 'fit-content',
      width: 'fit-content',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      padding: '2.5rem'
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
    formGroup: {
      display: 'flex',
      flexDirection: 'column'
    },
    label: {
      display: 'block',
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#374151',
      marginBottom: '0.25rem'
    },
    input: {
      width: '98%',
      padding: '0.5rem 0.25rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.375rem',
      fontSize: '1rem',
      transition: 'all 0.2s'
    },
    button: {
      width: '100%',
      padding: '0.75rem',
      border: 'none',
      borderRadius: '0.375rem',
      fontWeight: '500',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    buttonPrimary: {
      backgroundColor: '#1e40af',
      color: 'white'
    },
    buttonSuccess: {
      backgroundColor: '#10b981',
      color: 'white'
    },
    link: {
      background: 'none',
      border: 'none',
      color: '#2563eb',
      textDecoration: 'none',
      fontSize: '0.875rem',
      cursor: 'pointer',
      padding: '0'
    },
    forgotPassword: {
      textAlign: 'center',
      marginTop: '1rem'
    },
    divider: {
      textAlign: 'center',
      margin: '1rem 0'
    },
    dividerText: {
      color: '#9ca3af',
      fontSize: '0.875rem'
    },
    createAccount: {
      textAlign: 'center'
    },
    createAccountTitle: {
      fontSize: '1.125rem',
      fontWeight: '500',
      color: '#1f2937',
      marginBottom: '0.75rem',
      marginTop: '0'
    },
    createAccountText: {
      fontSize: '0.875rem',
      color: '#4b5563',
      marginBottom: '1rem',
      marginTop: '0'
    }
  };



  const responsiveStyles = {

    
    contentWrapper: {
      ...styles.contentWrapper,
      flexDirection: isTablet ? 'column' : 'row',
    
    },
    mainContent: {
      ...styles.mainContent,
      padding: isMobile ? '1rem' : '1.5rem'
    },
    card: {
      ...styles.card,
        width: isTablet? '89%': 'fit-content',
      padding: isMobile ? '1rem' : '1.5rem'
    },
    header: {
      ...styles.header,
      padding: isSmallMobile ? '0.75rem' : '1rem'
    },
    headerTitle: {
      ...styles.headerTitle,
      fontSize: isSmallMobile ? '1.25rem' : '1.5rem'
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
     

      {/* Main Content */}

  <div style={styles.createAccount}>
              <h3 style={styles.createAccountTitle}>Sistema Bloqueado</h3>
              <p style={styles.createAccountText}>Cadastre seu nome e senha para iniciar...</p>
          
            </div>

      <div style={responsiveStyles.mainContent}>
        <div style={responsiveStyles.contentWrapper}>
          
          <form  style={responsiveStyles.card} onSubmit={enterSystem}>
          {/* Login Section */}
         
            <h2 style={styles.cardTitle}>Login</h2>
            
            <div style={styles.form}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Nome *</label>
                <input
                
                         value={name}
                onChange={(e) => setName(e.target.value)}
                  
                  required
                  style={styles.input}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Senha *</label>
                <input
                        value={password}
            onChange={(e) => setPassword(e.target.value)}
                
                  required
                  style={styles.input}
                />
              </div>

              <button
               
                style={{...styles.button, ...styles.buttonPrimary}}
              >
                Entrar
              </button>
            </div>

            

          

            {/* Create Account Section */}
          
        

          </form>

          {/* Order Tracking Section */}

          <form style={responsiveStyles.card}  onSubmit={handleSubmit}>
          
            <h2 style={styles.cardTitle}>Cadastre seu User</h2>
            
            <div style={styles.form}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Nome *</label>
                <input
                 value={name} onChange={(e) => setName(e.target.value)}
               
                 
                  required
                  style={styles.input}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Senha *</label>
                <input
                 value={password} onChange={(e) => setPassword(e.target.value)}
                 
                 
                  required
                  style={styles.input}
                />
              </div>


              <button
             
                style={{...styles.button, ...styles.buttonPrimary}}
              >
                Cadastrar
              </button>
            </div>
         
          </form>

        </div>
      </div>
    </div>
  );
}