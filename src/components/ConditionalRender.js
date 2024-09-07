import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(false);

  const [nane, setname] = useState("Jefferson");
  return (
    <div>
      <h1> Isso será Exibido? </h1>
      {x && <p> Se X for True, Sim! </p>}
      {!x && <p> Agora x é Falso </p>}
      <h1> if Ternário </h1>


{/* If e else */ }

      {nane === "João" ? (
        <div>
          <p>O nome é joão</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado</p>
        </div>
      )}
      <button onClick={() => setname("João")}>Clique aqui!</button>
    </div>
  );
};

export default ConditionalRender;
