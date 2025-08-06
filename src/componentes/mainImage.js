// A continuação, usarei props para criar um componente de imagem principal em cada marca


import '../componentes/mainImage.css';
import MenuAside from './menuAside';
import {useState, useEffect} from 'react'


function MainImage({marca, imagemDesktop, imagemMobile}) {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480)


    useEffect(() => {

        const handleResize = () => setIsMobile(window.innerWidth <= 480);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize); 


    }, [])


    const imagem = isMobile ? imagemMobile : imagemDesktop;
    const simbolo = ">"; //Não posso colocar o símbolo maior que diretamente no JSX, então uso uma variável

    return (

    <div> 

         <div className="image-container">

        <div className="main-image">

        <ul class="breadcrumb">
        <li class="a"> Home </li>
        <li class="c"> {simbolo}</li>
        <li class="b"> {marca}</li>
        </ul>

        <img src= {imagem} alt={marca} class="image"/>


        </div>

        </div>

        <MenuAside /> {/* Esse componente aqui contém as Cards do Site */}
       
</div>

    );




}

export default MainImage;