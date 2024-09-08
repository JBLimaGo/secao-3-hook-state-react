function ChangeMessageState({ handleMessage }) {
  const messages = ["Oi", "Olá", "Oi Tudo bem?"]; // Array de mensagem

  return (
    <div>
      <button onClick={() => handleMessage(messages[0])}>1</button>
      <button onClick={() => handleMessage(messages[1])}>2</button>
      <button onClick={() => handleMessage(messages[2])}>2</button>
    </div>
  );
}

export default ChangeMessageState;
