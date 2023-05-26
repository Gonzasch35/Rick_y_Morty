import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Detail.module.css'
import { Link } from 'react-router-dom'

const Detail = () => {

    const {id} = useParams();
    const [character, setCharacter] = useState({})

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [id]);
    

  return (
    <div>
        <h1>Detalles del Personaje {character.name}</h1>
        <div className={styles.detail}>
            <div>
                <img src={character.image} alt="" />
            </div>
            <div className={styles.info}>
                
                <h2>{character.species}</h2>
                <h3>{character.gender}</h3>
                <h3>{character.status === "unknown" ? 'Desconocido' : character.status}</h3>
                <h3>{character.type}</h3>
            </div>
                <button><Link className={styles.link} to='/home'>Ir a Home</Link></button>
        </div>
    </div>
  )
}

export default Detail