import { useForm } from 'react-hook-form';
import { useState } from 'react';

function Formulario(){

    
    
    const { register, handleSubmit, formState: { errors } }  = useForm();


    const [dados, setDados] = useState([]);


    const onSubmit = (data) => {

        setDados((prevDados) => [...prevDados,data]);


    };





return (
<>
<form onSubmit={ handleSubmit ( onSubmit) }>

{ errors.nome && <span>NOME É obrigatorio</span>} 
<input {...register("nome")} type='text' placeholder='nome' required ></input>
<input {...register("idade")} type='text' placeholder='idade' required></input>

<input  type="submit" value={"executar"}></input>


</form>

<ul>
     {dados.map((item, index)=>(

<li key={index}>  {item.nome}  - {item.idade}
</li>

     

     ))}



</ul>
</>
)

}



export default Formulario;