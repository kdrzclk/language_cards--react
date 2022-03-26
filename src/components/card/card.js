import { languages } from "../../helpers/data.js";
import Item from "../item/Item.js";
import "./Card.css";

const Card = () => {
  return (
    <div className="card-area-container">
      {/* <div className="bars"></div> */}
      <h1 className="language-title">Languages</h1>
      <div className="cards-container">
        {languages.map((item, index) => {
          return <Item card={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Card;
