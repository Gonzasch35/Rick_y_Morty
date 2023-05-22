import Card from "../Card/Card";
import styles from './Cards.module.css'

export default function Cards({characters, onClose}) {
   return  <div className={styles.cards}>
      {characters.map((character) => {
         return(
         <div 
         key={character.id}>
            <Card
               id={character.id}
               name={character.name}
               species={character.species}
               gender={character.gender}
               image={character.image}
               onClose={onClose}
            />
         </div>
      )})}
   </div>;
}



//<button /* onClick={hundleClick} */>X</button>
//<h2>{character.name}</h2>
//<h2>{character.species}</h2>
//<h2>{character.gender}</h2>
//<img  src={character.image} alt="" />