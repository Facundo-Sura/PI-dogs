import "./Cards.css";
import Card from "../card/Card";

function Cards({ allDogs }) {
  const dogsList = allDogs;

  return <div>{dogsList && dogsList.map((dog) => <Card dog={dog} />)}</div>;
}

export default Cards;
