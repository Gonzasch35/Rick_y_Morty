

const validation = (userData, errors, setErrors) => {
    
    //============ Validacion de Email ====================
    if(!userData.username || !userData.password) {
        setErrors({...errors, error:'Por favor completa los campos'})
    }else if(userData.username.length > 35) setErrors({...errors, error: 'El email no puede superar los 35 caracteres'});
    // eslint-disable-next-line
    else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)) {
        setErrors({...errors, error: 'Email inválido'})
    } else {
        setErrors({...errors, error: ''})
    }

    //================== Validacion de Password ==================
/*     if(!userData.password) {
        setErrors({...errors, password: 'Ingrese una contraseña'})

    }else if((userData.password.length) < 6) {setErrors({...errors, password: 'Contraseña demasiado corta'})

    }else if(!/\d/.test(userData.password)) {setErrors({...errors, password: 'La contraseña debe contener al menos un numero'})

    }else {
        setErrors({...errors, password: ''})
    } */

}

export default validation