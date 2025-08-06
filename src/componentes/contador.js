import {  useState }from 'react';
import { useEffect } from 'react';


/* useEffect(() => {
    
    codigo de efeito colateral aqui
    
    
    }, [dependencias]); // Dependências para re-executar o efeito colateral
    
    
    
    
    
    */

export default function Contador() {

const [numero, setNumero] = useState(0);
const [nome, setNome] = useState("Madja");

const [turma, setTurma] = useState("Toti 2025");



useEffect(() => {


    const nomeTurma = turma;
    console.log(`O número atual é: ${turma}`);
    if (nomeTurma === "54") {
        alert(`Você está correto: ${nomeTurma}`);
    }
}, [turma]); // Re-executa quando 'numero' ou 'nome' 


useEffect(() => {
 //  console.log(`O número atual é: ${numero} e o nome é: ${nome}`); 
    if (numero > 10) {
        var container = document.querySelector('.contador-container');
     
       var limite = document.createElement('h1', null, 'Você atingiu o número máximo de cliques!');
        limite.style.color = 'red';
        limite.style.textAlign = 'center';
        container.appendChild(limite);
           limite.innerHTML = 'Para'; 
       
    }
}, [numero]); // Re-executa quando 'numero' muda

function incrementa() {
    setNumero(numero + 1);  
    setNome("Madja Silva");
}

function  zerar()  {
  setNumero(0);
  setNome("madJa");
};


    return(

            <div class="contador-container">

            <h1 >Contador de cliques </h1>

            <>Voc~e {nome} clicou {numero} vezes </>

            <button onClick={incrementa}>Clique aqui</button>
            <button onClick={zerar}>Xerar</button>
          {/*  <button onClick={() => setNumero(0)}>Zerar</button>*/}


                <div className="input-turma">

                    <input type="text" value={turma} onChange={(e) => setTurma((e.target.value))} />
                    <p>Você está na turma: {turma}</p>
                </div>

            </div>


    



    )



}