import { useState } from 'react';

export default function VokeComponent() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [trackingData, setTrackingData] = useState({
    orderNumber: '',
    orderEmail: '',
    cep: ''
  });

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleTrackingChange = (e) => {
    setTrackingData({
      ...trackingData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login:', loginData);
  };

  const handleTracking = (e) => {
    e.preventDefault();
    console.log('Rastreamento:', trackingData);
  };

  const handleForgotPassword = () => {
    console.log('Esqueci minha senha');
  };

  const handleSignUp = () => {
    console.log('Cadastre-se');
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f3f4f6'
    },
    header: {
      backgroundColor: '#ec4899',
      color: 'white',
      padding: '1rem'
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
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      padding: '1.5rem'
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
      width: '100%',
      padding: '0.5rem 0.75rem',
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

  // Media queries usando JavaScript
  const isTablet = window.innerWidth <= 1024;
  const isMobile = window.innerWidth <= 768;
  const isSmallMobile = window.innerWidth <= 480;

  const responsiveStyles = {
    contentWrapper: {
      ...styles.contentWrapper,
      flexDirection: isTablet ? 'column' : 'row'
    },
    mainContent: {
      ...styles.mainContent,
      padding: isMobile ? '1rem' : '1.5rem'
    },
    card: {
      ...styles.card,
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
      <div style={responsiveStyles.header}>
        <h1 style={responsiveStyles.headerTitle}>voke</h1>
      </div>

      {/* Main Content */}
      <div style={responsiveStyles.mainContent}>
        <div style={responsiveStyles.contentWrapper}>
          
          {/* Login Section */}
          <div style={responsiveStyles.card}>
            <h2 style={styles.cardTitle}>Login</h2>
            
            <div style={styles.form}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  required
                  style={styles.input}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Senha *</label>
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  required
                  style={styles.input}
                />
              </div>

              <button
                onClick={handleLogin}
                style={{...styles.button, ...styles.buttonPrimary}}
              >
                Entrar
              </button>
            </div>

            <div style={styles.forgotPassword}>
              <button
                onClick={handleForgotPassword}
                style={styles.link}
              >
                Esqueci minha senha
              </button>
            </div>

            <div style={styles.divider}>
              <span style={styles.dividerText}>OU</span>
            </div>

            {/* Create Account Section */}
            <div style={styles.createAccount}>
              <h3 style={styles.createAccountTitle}>Crie uma conta</h3>
              <p style={styles.createAccountText}>Ainda não tem conta na Voke?</p>
              <button
                onClick={handleSignUp}
                style={{...styles.button, ...styles.buttonSuccess}}
              >
                Cadastre-se
              </button>
            </div>
          </div>

          {/* Order Tracking Section */}
          <div style={responsiveStyles.card}>
            <h2 style={styles.cardTitle}>Conferir o seu pedido</h2>
            
            <div style={styles.form}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Número do Pedido *</label>
                <input
                  type="text"
                  name="orderNumber"
                  value={trackingData.orderNumber}
                  onChange={handleTrackingChange}
                  required
                  style={styles.input}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Email do Pedido *</label>
                <input
                  type="email"
                  name="orderEmail"
                  value={trackingData.orderEmail}
                  onChange={handleTrackingChange}
                  required
                  style={styles.input}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>CEP para cobrança *</label>
                <input
                  type="text"
                  name="cep"
                  value={trackingData.cep}
                  onChange={handleTrackingChange}
                  required
                  placeholder="00000-000"
                  style={styles.input}
                />
              </div>

              <button
                onClick={handleTracking}
                style={{...styles.button, ...styles.buttonPrimary}}
              >
                Consultar o código de rastreio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}