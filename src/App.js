import { useState } from "react";
import "./App.css";

//import imagen2 from "./assets/imagen2.jpg";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";

function App() {
  // const name = "JBL"; // Dados dinamicos
  const [userName] = useState("Lima"); // Passagem de paramento por variavel - State

  const cars = [
    // Array de objeto
    { id: 1, brand: "Ferrari", color: "Amarelo", carNew: true, km: 0 },
    { id: 2, brand: "Honda", color: "Prata", carNew: false, km: 15522 },
    { id: 3, brand: "Gol", color: "Branco", carNew: true, km: 0 },
  ];

  function showMessage() {
    console.log("Evento do componente Pai!");
  }

  const [message, setMessage] = useState(""); // Tem um estado que e gerenciado pelo componente pai

  const handleMessage = (msg) => {
    // Tem a formula de alterar o estado
    setMessage(msg);
  };

  const pessoa = [
    // Array de objeto pessoa
    {
      id: 1,
      nome: "Jefferson",
      sexo: "M",
      proficao: "Developer",
      cor: "Preto",
      idade: "37",
    },
    {
      id: 2,
      nome: "Barbosa",
      sexo: "M",
      proficao: "Developer",
      cor: "Preto",
      idade: "17",
    },
    {
      id: 3,
      nome: "Ana",
      sexo: "F",
      proficao: "Professora",
      cor: "Branca",
      idade: "17",
    },
    {
      id: 4,
      nome: "Jenifer",
      sexo: "F",
      proficao: "Cuidadora",
      cor: "Parda",
      idade: "40",
    },
  ];

  return (
    <div className="App">
      <div>
        <h1>Seção: 3 - Avançando no React</h1>
      </div>
      {/* Imagem em Public

      <div>
        <img src="/imagen1.jpg" alt="Paisagem" />
      </div>

       */}
      {/* Imagem em assets 

      <div>
        <img src={imagen2} alt="Fogo" />
      </div>
      
      */}
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

      {/*  Loop em array de objeto = Esse modo e mais utilizado quando tenho varios dados parto para usar o map um loop para impressão na tela */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          carNew={car.carNew}
        />
      ))}

      {/* Fragment */}
      <Fragment propFragment="Teste" />

      {/* Children - Abraçar um conteudo com algum conteudo
      nos exemplos temos props distintos e html internos distintos  */}
      <Container myValue="Testing">
        <p> E Este é o conteúdo</p>
      </Container>
      <Container myValue="Testing 2">
        <h5> Testando o container </h5>
      </Container>

      {/* Executa Função  do compomente pai para o componente filho passa a funcão atraves de uma prop e no componente 
       Extrai essa prop e utiliza */}
      <ExecuteFunction myFunction={showMessage} />

      {/* State Lift = Tem um estado que e gerenciado pelo componente pai, Tem a formula de alterar o estado */}
      <Message msg={message} /> {/* Componente que consome esse estado */}
      <ChangeMessageState handleMessage={handleMessage} /> {/* Componente que altera e eleva esse estado para ter uma atualizaçâo e um recossumo desse estado */}
      
      
      {/* Tarefa da Seção 3 - Array de pessoa e informações de cada uma nome, sexo, idade, profição, cor 
          e checar se a pessoa pode tirar habilitação ou não !*/}
      {pessoa.map((pessoa) => (
        <UserDetails
          key={pessoa.id}
          nome={pessoa.nome}
          sexo={pessoa.sexo}
          proficao={pessoa.proficao}
          cor={pessoa.cor}
          idade={pessoa.idade}
        />
      ))}
    </div>
  );
}

export default App;
