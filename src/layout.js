import './App.css';
import Footer from './componentes/footer.js';
import Header from './componentes/header.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Formulario from './componentes/useForms.js';
import ParOuImpar from './pages/parOuImpar';
import MainImage from './componentes/mainImage.js';
import MenuAside from './componentes/menuAside.js'; // Importando o componente MenuAside
import Contador from './componentes/contador.js'; // Importando o componente Contador

 //Brands icons

function Main() {
 

  
    return(
      <BrowserRouter>
      <Header />
      <Routes>
        
        <Route path="/" element={<MainImage marca="Liquida Tech" 
        imagemDesktop="https://www.voke.shop/dw/image/v2/BKXD_PRD/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dwc63f789f/VOKE_JULHO_CATEGORIAS_DESKTOP_14.png"
        imagemMobile="https://www.voke.shop/dw/image/v2/BKXD_PRD/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dw93c52be0/Liquida%20Tech%20[Mobile]@2x.png"/>}  />
          <Route path="/apple" element={<MainImage marca="Apple" 
          imagemDesktop="https://www.voke.shop/dw/image/v2/BKXD_PRD/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dw73df1774/VOKE_JULHO_CATEGORIAS_DESKTOP_15.png"
          imagemMobile="https://www.voke.shop/dw/image/v2/BKXD_PRD/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dwcdc151f6/Apple%20[Mobile]@2x.png" />} />
          <Route path="/samsung" element={<MainImage marca="Samsung"
           imagemDesktop="https://www.voke.shop/dw/image/v2/BKXD_PRD/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dw91731537/Samsung%20[Desktop]@2x.png"  
           imagemMobile="https://www.voke.shop/dw/image/v2/BKXD_PRD/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dwf0282a9e/Samsung%20[Mobile]@2x.png"/>} />
          <Route path="/lenovo" element={<MainImage marca="Lenovo" imagemDesktop="https://www.voke.shop/dw/image/v2/BKXD_PRD/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dw4ff3f52b/Lenovo%20[Desktop]@2x.png"
          imagemMobile="https://www.voke.shop/dw/image/v2/BKXD_PRD/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dw082f32b1/Lenovo%20[Mobile]@2x.png"/>}/>
            <Route path="/dell" element={<MainImage marca="Dell" imagemDesktop="https://www.voke.shop/dw/image/v2/BKXD_PRD/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dwac9938f0/Dell%20[Desktop]@2x.png"
            imagemMobile="https://www.voke.shop/dw/image/v2/BKXD_PRD/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dw81428664/Dell%20[Mobile]@2x.png" />}/>
      </Routes>
      <Footer />
    </BrowserRouter>

    )
      

  
  
}

export default Main;
