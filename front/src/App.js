import React, { useState, useEffect} from 'react'
import styles from './App.module.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites'
import { Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import { connect} from 'react-redux'
import { removeFavorite } from './redux/actions';
import axios from 'axios'


function App ({removeFavorite}) {

  const [characters, setCharacters] = useState([])
  
  const navigate = useNavigate()
  const [access, setAccess] = useState(false)
/*   const username = 'correo@correo.com'
  const password = 'pass123' */

  
  const location = useLocation()
  


  useEffect(() => {
/*     if(localStorage.getItem('name') === username) {
      navigate('/home')
    } else */ navigate('/home')
    // eslint-disable-next-line
  }, [access])


  //=====================   onSearch   ==============================
  const onSearch = (id) => {

/*     const URL_BASE = 'https://be-a-rym.up.railway.app/api' */
    const URL_BASE = 'http://localhost:3001/rickandmorty'
/*     const KEY = '514202f34f23.3315146edc770c0ffe5b' */

/*     https://rickandmortyapi.com/api/character/$%7Bid%7D */
/*     fetch(`${URL_BASE}/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name && !characters.find((char) => char.id === data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      }) */
      fetch(`${URL_BASE}/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
          if (!characters.find((char) => char.id === data.id)) {
            setCharacters((oldChars) => [...oldChars, data])}
            else {window.alert('El personaje ya exite') }
         } else {
            window.alert('No hay personajes con ese ID');
         }
      })
  }

  //============================   onClose   ==========================================


  const onClose = (id) => {
    setCharacters(
      characters.filter(char => char.id !== id)
    )
    removeFavorite(id)
  
  }

  //========================= Login =================================

  function login(userData) {
    const { username, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${username}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(data);
       access && navigate('/home');
    });
 }


  /* const login = (userData) => {
    if(username === userData.username && password === userData.password) {
      localStorage.setItem('name', username)
      localStorage.setItem('pass', password)
      setAccess(true);
    } else alert('Usuario invalido')
  } */



  const logout = () => {
/*     localStorage.setItem('name', 0)
    localStorage.setItem('pass', 0) */
    setAccess(false)
    navigate('/')
  }


  //======================================================================================


  return (
    <div className={styles.App} /* style={{ padding: '25px' }} */>
      {location.pathname !== '/' && <Nav onSearch={onSearch} logout={logout}/>}
      <Routes>
        <Route 
          path='/'
          element={<Form 
                    login={login}
                  />}
        />
        <Route 
          path='/home'
          element={<Cards
                    characters={characters}
                    onClose={onClose}
                  />}
        />
        <Route 
          path='/about'
          element={<About />}
        />
        <Route 
          path='/favorites'
          element={<Favorites />}
        />
        <Route 
          path='/detail/:id'
          element={<Detail />}
        />
      </Routes>
    </div>
  )
}



const mapDispatchToProps = (dispatch) =>{
  return {
     removeFavorite: (id)=>{dispatch(removeFavorite(id))}
  }
}

export default connect(null, mapDispatchToProps)(App)
