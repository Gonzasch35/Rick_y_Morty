import React, { useState } from 'react'
import styles from './Form.module.css'
import validation from './validation'

const Form = ({login}) => {

    const [userData, setUserData] = useState({
        username: '',
        password: '',
    })
    const [errors, setErrors] = useState({
        username: '',
        password: '',
    })

    const handleChange = event => {
        const property = event.target.name
        const value = event.target.value
        setUserData({...userData, [property]: value})

        validation({...userData, [property]: value}, errors, setErrors)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }


  return (
    <form className={styles.container} onSubmit={handleSubmit}>
        <>    
            <h2>Login de Ingreso</h2>
            <div>
                <label htmlFor="username">Email</label>
                <input 
                    type="text"
                    name='username' 
                    placeholder='--- Email ---'
                    value={userData.username}
                    onChange={handleChange}
                />
                <p>{errors.username}</p>
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    name='password' 
                    placeholder='--- Password ---'
                    value={userData.password}
                    onChange={handleChange}
                />
                <h6 className={styles.errors}>{errors.password}</h6>
            </div>

            <button>Login</button>
        </>
    </form>
  )
}

export default Form