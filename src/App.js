import "./App.css";

import imagen2 from "./assets/imagen2.jpg";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";

function App() {
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
    </div>
  );
}

export default App;
