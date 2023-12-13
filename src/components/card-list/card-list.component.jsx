import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ monsters }) => {
 const { id } = monsters;

 return (
   <div key={id} className="card-list">
     {monsters.map((monster) => {
       return <Card monster={monster} />;
     })}
   </div>
 );
  };

export default CardList;
