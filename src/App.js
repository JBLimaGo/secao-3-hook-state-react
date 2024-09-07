import { useState } from "react";
import "./App.css";

import imagen2 from "./assets/imagen2.jpg";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";

function App() {
  const name = "JBL"; // Dados dinamicos
  const [userName] = useState("Lima"); // Passagem de paramento por variavel - State
  return (
    <div className="App">
      <div>
        <h1>Seção: 3 - Avançando no React</h1>
      </div>

      {/* Imagem em Public */}
      <div>
        <img src="/imagen1.jpg" alt="Paisagem" />
      </div>

      {/* Imagem em assets */}

      <div>
        <img src={imagen2} alt="Fogo" />
      </div>

      <ManageData />
      <ListRender />
      <ConditionalRender />

      {/* props - Nas props e chegado um Objeto com isso posso usar todas propriedades do objeto dentro do componente
         Pode se passar valores diretos <ShowUserName name="Jefferson" /> por variavel <ShowUserName name={name} />  e por State <ShowUserName name={userName} />*/}
      <ShowUserName name={userName} />

      {/* Destructuring em props - Desestruturando props e a forma que mais vera nos projetos */}
      {/* Os Nomes do Destructuring tem que ser o mesmo da variaveis na chamado do componente. Poise se for diferente os nomes não e feito o link de um com o outro
         Dentro do componente.    */}
      <CarDetails brand="VW" KM={10000} color="Branco" carNew={false} />

      {/*  Reutilização de componentes - Reaproveitamento dos componentes  */}
      <CarDetails brand="Ford" KM={0} color="Preto" carNew={true} />
      <CarDetails brand="Fiat" km={6000} color="Vermelho" carNew={false} />
    </div>
  );
}

export default App;
