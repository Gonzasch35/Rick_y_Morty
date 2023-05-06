import styles from './Card.module.css'
import { Link } from 'react-router-dom';


export default function Card({name, species, gender, image, onClose, id}) {
   return (
      <div className={styles.card}>
         <div className={styles.image}>
            <button className={styles.button} onClick={() => onClose(id)}>X</button>
            <img  src={image} alt="" />
         </div>
         <div className={styles.info}>
            <h2><span>Personaje: </span>{name}</h2>
            <h2><span>Especie: </span>{species}</h2>
            <h2><span>Genero: </span>{gender}</h2>
            <button className={styles.boton_detalles}><Link className={styles.link} to={`/detail/${id}`}>Ver Detalles</Link></button>
         </div>
      </div>
   );
}
