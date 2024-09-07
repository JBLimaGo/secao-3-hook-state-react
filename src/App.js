import { useState } from "react";
import "./App.css";

import imagen2 from "./assets/imagen2.jpg";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";

function App() {
  const name = "JBL";  // Dados dinamicos
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

      {/* props - passando um objeto para um componente  com isso posso usar todas propriedades do objeto dentro do componente
         Pode se passar valores diretos <ShowUserName name="Jefferson" /> por variavel <ShowUserName name={name} />  e por State <ShowUserName name={userName} />*/}
      <ShowUserName name={userName} />
    </div>
  );
}

export default App;
