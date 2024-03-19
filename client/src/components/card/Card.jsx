import { Link } from "react-router-dom";
import "./Card.css";

function Card({ dog }) {
  const {id, name, temperament } = dog;

  return (
    <div className="card-container">
      <Link to={`/home/${id}`}>
        <img src={} alt="Dog" />
        <h2>{name}</h2>
        <p>{temperament}</p>
      </Link>
    </div>
  );
}

export default Card;
