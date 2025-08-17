import './App.css';
import Footer from './componentes/footer.js';
import Header from './componentes/header.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import VokeComponent from './login.js';
import ProductForm from './componentes/postProducts.js';
import MainImage from './componentes/mainImage.js';


 //Brands icons

function Main() {
 

  
    return(
      <BrowserRouter>
      <Header />
      <Routes>
        
        <Route path="/" element={<MainImage marca="Liquida Tech" 
        imagemDesktop="https://www.voke.shop/dw/image/v2/BKXD_PRD/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dwc63f789f/VOKE_JULHO_CATEGORIAS_DESKTOP_14.png"
        imagemMobile="https://www.voke.shop/dw/image/v2/BKXD_PRD/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dw93c52be0/Liquida%20Tech%20[Mobile]@2x.png"/>}  />
        <Route path="/:brand" element={<MainImage/>} />
          <Route path="/login" element={<VokeComponent/>} />
      </Routes>
     
     <ProductForm onProductAdded={() => window.location.reload()}/>
     
      <Footer />

      
    </BrowserRouter>

    )
      

  
  
}

export default Main;
