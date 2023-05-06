import React, { useState, useEffect } from 'react'
import styles from './App.module.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import { Route, Routes, useLocation, useNavigate} from 'react-router-dom'


function App () {

  const [characters, setCharacters] = useState([])
  
  const navigate = useNavigate()
  const [access, setAccess] = useState(false)
  const username = 'correo@correo.com'
  const password = 'pass123'

  
  const location = useLocation()
  


  useEffect(() => {
    if(localStorage.getItem('name') === username) {
      navigate('/home')
    } else navigate('/')
    // eslint-disable-next-line
  }, [access])


  //=====================   onSearch   ==============================
  const onSearch = (id) => {

/*     const URL_BASE = 'https://be-a-rym.up.railway.app/api' */
    const URL_BASE = 'https://rickandmortyapi.com/api'
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
  }

  //========================= Login =================================

  const login = (userData) => {
    if(username === userData.username && password === userData.password) {
      localStorage.setItem('name', username)
      localStorage.setItem('pass', password)
      setAccess(true);
    } else alert('Usuario invalido')
  }



  const logout = () => {
    localStorage.setItem('name', 0)
    localStorage.setItem('pass', 0)
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
          path='/detail/:id'
          element={<Detail />}
        />
      </Routes>
    </div>
  )
}

export default App