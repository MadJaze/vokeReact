

function ParOuImpar() {
  const numeros = [12, 35, 24, 1453, 2322];

  return (
    <div>
      {numeros.map((numero, index) => {
        const parOuImpar = numero % 2 === 0 ? "par" : "impar";
        return (
          <p key={index}>
            Número: {numero} é {parOuImpar}
          </p>
        );
      })}
    </div>
  );
}

export default ParOuImpar;
