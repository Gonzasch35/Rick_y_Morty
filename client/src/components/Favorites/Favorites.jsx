import React from 'react'
import { connect, useDispatch} from 'react-redux'
import styles from './Favorites.module.css'
import * as actions from '../../redux/actions'

const Favorites = ({myFavorites}) => {

  const dispatch = useDispatch()

  const order = (event) => {
    dispatch(actions.orderCards(event.target.value))
  }

  const filter = e => {
    dispatch(actions.filterCards(e.target.value))
  }

  return (
    <div>
      <h1>Favoritos</h1>
        <div>
          <select name="ordenamiento" onChange={order} >
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
          </select>
          <select name="filtrado" onChange={filter}>
            <option value="selectGender">-- TODOS --</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      <div className={styles.cards}>
      {myFavorites.map((favorite) => {
        return(
          <div key={favorite.id} className={styles.card}>
              <img src={favorite.image} alt="imagee" />
              <h2>{favorite.name}</h2>
              <h2>{favorite.species}</h2>
              <h2>{favorite.status}</h2>
              <h2>{favorite.gender}</h2>
          </div>
        ) 
      })}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
       myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)