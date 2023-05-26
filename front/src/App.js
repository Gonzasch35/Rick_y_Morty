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
 /* const username = 'correo@correo.com'
  const password = 'pass123' */

  
  const location = useLocation()
  


  useEffect(() => {
/*      if(localStorage.getItem('name') === username) {
      navigate('/home') */
   access && navigate('/home')
    // eslint-disable-next-line
  }, [access])


  //=====================   onSearch   ==============================
  const onSearch = async (id) => {

    const URL_BASE = 'http://localhost:3001/rickandmorty'
    try {
      const response = await fetch(`${URL_BASE}/character/${id}`)
      const data = await response.json()
         if (data.name) {
          if (!characters.find((char) => char.id === data.id)) {
            setCharacters((oldChars) => [...oldChars, data])
          } else throw Error('El personaje ya exite')
         }else {
            throw Error('No hay personajes con ese ID');
         }     
    } catch (error) {
      window.alert(error)
    }
  }

  //============================   onClose   ==========================================


  const onClose = (id) => {
    setCharacters(
      characters.filter(char => char.id !== id)
    )
    removeFavorite(id)
  
  }

  //========================= Login =================================

  async function login(userData) {
    try {
      const { username, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const {data} = await axios(URL + `?email=${username}&password=${password}`)
         const { access } = data;
         setAccess(data);
          if(access === true) {
           navigate('/home');
          } else {
           throw Error('Usuario incorrecto')
          }   
    } catch (error) {
      window.alert(error.message)
    }
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
