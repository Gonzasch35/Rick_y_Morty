import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import styles from './Nav.module.css'
import logo from './logo-rym.png'
import { Link } from 'react-router-dom'

const Nav = ({onSearch, logout}) => {




  return (
    <div className={styles.contenedor}>
        <div className={styles.logo}>
            <img src={logo} alt="" />
        </div>

        <div className={styles.contenido}>
          <div>
            <Link className={styles.link} to='/home'>Home</Link>
            <Link className={styles.link} to='/about'>About</Link>
          </div>
            <SearchBar
                className={styles.search_bar}
                onSearch={onSearch}
            />
            <button className={styles.link} onClick={()=>logout()}>Salir</button>
        </div>
    </div>
  )
}

export default Nav