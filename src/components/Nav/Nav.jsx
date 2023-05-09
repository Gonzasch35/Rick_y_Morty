import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import styles from './Nav.module.css'
import logo from './logo.png'
import { Link } from 'react-router-dom'

const Nav = ({onSearch, logout}) => {




  return (
    <div className={styles.contenedor}>

        <div className={styles.logo}>
            <img src={logo} alt="" />
        </div>
            <SearchBar
                className={styles.search_bar}
                onSearch={onSearch}
            />
        <div className={styles.contenido}>
            <Link className={styles.link} to='/home'>Home</Link>
            <Link className={styles.link} to='/favorites'>Favorites</Link>
            <Link className={styles.link} to='/about'>About</Link>
            <button className={styles.link_cerrar} onClick={()=>logout()}>Cerrar sesion</button>
        </div>
    </div>
  )
}

export default Nav