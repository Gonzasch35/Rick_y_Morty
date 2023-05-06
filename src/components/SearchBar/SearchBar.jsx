import { useState } from 'react';
import styles from './SearchBar.module.css'
 
export default function SearchBar({onSearch}) {

   const [id, setId] = useState('')

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div className={styles.contenedor}>
         <input 
            className={styles.input}
            type='text'
            placeholder='ID del Personaje'
            onChange={handleChange}
         />
         <button
         onClick={()=>onSearch(id)}
         className={styles.button}
         >Agregar</button>
      </div>
   );
}
