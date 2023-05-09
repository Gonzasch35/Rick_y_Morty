import React from 'react'
import { connect} from 'react-redux'
import styles from './Favorites.module.css'

const Favorites = ({myFavorites}) => {



  return (
    <div>
      <h1>Favoritos</h1>
    <div className={styles.cards}>
    {myFavorites.map((favorite) => {
       return(
        <div key={favorite.id} className={styles.card}>
            <h2>{favorite.name}</h2>
            <h2>{favorite.species}</h2>
            <h2>{favorite.status}</h2>
            <h2>{favorite.gender}</h2>
            <img src={favorite.image} alt="imagee" />
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