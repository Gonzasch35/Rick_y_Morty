import React, { useState } from 'react'
import styles from './Form.module.css'
import validation from './validation'

const Form = ({login}) => {

    const [userData, setUserData] = useState({
        username: '',
        password: '',
    })
    const [errors, setErrors] = useState({
        error: '',
    })

    const handleChange = event => {
        const property = event.target.name
        const value = event.target.value
        setUserData({...userData, [property]: value})

        if(property === 'username') {
            validation({...userData, username: value}, errors, setErrors)
        } else {
            validation({...userData, password: value}, errors, setErrors)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
        <>    
            <h2>Login de Ingreso</h2>
            <h6 className={styles.errors}>{errors.error}</h6>
            <div>
                <label htmlFor="username">Email *</label>
                <input
                    type="text"
                    name='username' 
                    placeholder='--- Email ---'
                    value={userData.username}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="password">Password *</label>
                <input 
                    type="password" 
                    name='password'
                    placeholder='--- Password ---'
                    value={userData.password}
                    onChange={handleChange}
                />
                <h6>* Campos Obligatorios </h6>
            </div>

            <button>Login</button>
        </>
    </form>
  )
}

export default Form