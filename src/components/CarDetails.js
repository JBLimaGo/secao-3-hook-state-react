//const CarDetails = (props) => {
const CarDetails = ({ brand, km, color, carNew }) => {
  return (
    <div>
      <h2>Detalhes do carro!</h2>
      <ul>
        <li> Marca do carro: {brand}</li>
        <li> KM: {km}</li>
        <li> Cor: {color}</li>
      </ul>
      {carNew && <p>Este carro é novo!</p>}
    </div>
  );
};

export default CarDetails;
