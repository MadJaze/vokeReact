// A continuação, usarei props para criar um componente de imagem principal em cada marca


import '../componentes/mainImage.css';
import MenuAside from './menuAside';
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';


function MainImage() {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480)
    const { brand } = useParams(); //Trazer parámetro do db.json (important)

   

    useEffect(() => {

        const handleResize = () => setIsMobile(window.innerWidth <= 480);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize); 


    }, [])

    const brandData = {

    apple: {
      nome: "Apple",
      imagemDesktop: "https://www.voke.shop/dw/image/v2/BKXD_PRD/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dw10e6cc05/Apple%20[Desktop]@2x.png",
      imagemMobile: "https://www.voke.shop/dw/image/v2/BKXD_PRD/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dwcdc151f6/Apple%20[Mobile]@2x.png"
    },
    samsung: {
      nome: "Samsung",
      imagemDesktop: "https://www.voke.shop/dw/image/v2/BKXD_PRD/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dw91731537/Samsung%20[Desktop]@2x.png",
      imagemMobile: "https://www.voke.shop/dw/image/v2/BKXD_PRD/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dwf0282a9e/Samsung%20[Mobile]@2x.png"
    },
    lenovo: {
      nome: "Lenovo",
      imagemDesktop: "https://www.voke.shop/dw/image/v2/BKXD_PRD/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dw4ff3f52b/Lenovo%20[Desktop]@2x.png",
      imagemMobile: "https://www.voke.shop/dw/image/v2/BKXD_PRD/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dw082f32b1/Lenovo%20[Mobile]@2x.png"
    },
    dell: {
      nome: "Dell",
      imagemDesktop: "https://www.voke.shop/dw/image/v2/BKXD_PRD/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dwac9938f0/Dell%20[Desktop]@2x.png",
      imagemMobile: "https://www.voke.shop/dw/image/v2/BKXD_PRD/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dw81428664/Dell%20[Mobile]@2x.png"
    }
  };

    const liquidaTech = {
    nome: "Liquida Tech",
    imagemDesktop: "https://www.voke.shop/dw/image/v2/BKXD_PRD/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dwc63f789f/VOKE_JULHO_CATEGORIAS_DESKTOP_14.png",
    imagemMobile: "https://www.voke.shop/dw/image/v2/BKXD_PRD/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dw93c52be0/Liquida%20Tech%20[Mobile]@2x.png"
  };

      const data = brand? brandData[brand] : liquidaTech;
     
  
    const simbolo = ">"; //Não posso colocar o símbolo maior que diretamente no JSX, então uso uma variável

    {/*IMAGEM DEPENDENDO DA MARCA*/}




    const imagem = isMobile ? data.imagemMobile : data.imagemDesktop;

      if (!data) {

        brand = "Liquida Tech"

    return  <div>Marca não encontrada.</div>

      } 


        
        
        
    return (

    <div> 

         <div className="image-container">

        <div className="main-image">

        <ul class="breadcrumb">
        <li class="a"> Home </li>
        <li class="c"> {simbolo}</li>
        <li class="b"> {brand? brand: "Liquida Tech"}</li>
        </ul>

        <img src= {imagem} alt={data} className="image"/>


        </div>

        </div>

        <MenuAside /> {/* Esse componente aqui contém as Cards do Site */}
       
</div>

    );




}

export default MainImage;