const UserDetails = ({ nome, sexo, proficao, cor, idade }) => {
  return (
    <div>
      <h2>Informações das pessoas! </h2>
      <ul>
        <h2> Nome: {nome}</h2>
        <li> Sexo: {sexo}</li>
        <li> Profição {proficao}</li>
        <li> Cor: {cor}</li>
        <h3> Idade: {idade}</h3>
      </ul>

      {idade >= "18" ? (
        <p>Usuário pode tirar carteira de habilitação!</p>
      ) : (
        <p>Meno de idade!</p>
      )}
    </div>
  );
};

export default UserDetails;
