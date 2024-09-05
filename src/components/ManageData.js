import { useState } from "react";

// Componente hook - Função para trabalhar com valores diferentes componente sendo Renderização e alterando a exibição da Tela,
// Com isso podemos ver a alteração em tempo real na tela.
//

const ManageData = () => {
  let someData = 10;

  console.log(someData);

  const [number, setNumber] = useState(15);

  console.log(number);

  return (
    <div>
      <div>
        <p>Valor: {someData} </p>
        <button onClick={() => (someData = 15)}> Mudar variável</button>
      </div>
      <div>
        <p>Valor: {number} </p>
        <button onClick={() => setNumber(25)}> Mudar o state</button>
      </div>
    </div>
  );
};

export default ManageData;
