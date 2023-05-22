import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import { connect} from 'react-redux'
import { addFavorite, removeFavorite } from '../../redux/actions';
import { useEffect, useState } from 'react';



 const Card = ({name, species, gender, image, onClose, id, myFavorites, addFavorite, removeFavorite}) => {

   const [isFav, setIsFav] = useState(false)


   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         removeFavorite(id)
      } else {
         setIsFav(true)
         addFavorite({name, species, gender, image, onClose, id, myFavorites, addFavorite, removeFavorite})
    }
   }


   return (
      <div className={styles.card}>
         <div className={styles.image}>
            {
            isFav ? (
            <button className={styles.favorite} onClick={handleFavorite}>❤️</button>
            ) : (
            <button className={styles.favorite} onClick={handleFavorite}>🤍</button>
               )
            }
            <img  src={image} alt="" />
         </div>
         <div className={styles.info}>

            <button className={styles.button} onClick={() => onClose(id)}>X</button>
            <h2>{name}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <button className={styles.boton_detalles}><Link className={styles.link} to={`/detail/${id}`}>Ver Detalles</Link></button>
         </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) =>{
   return {
      addFavorite: (character)=>{dispatch(addFavorite(character))},
      removeFavorite: (id)=>{dispatch(removeFavorite(id))}
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card)