import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(false);
  return (
    <div>
      <h1> Isso será Exibido? </h1>
      {x && <p> Se X for True, Sim! </p>}
      {!x && <p> Agora x é Falso </p>}
    </div>
  );
};

export default ConditionalRender;
