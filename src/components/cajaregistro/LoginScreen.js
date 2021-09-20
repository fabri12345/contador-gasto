import React from 'react' 
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logearUsuario, startGoogleLogin } from '../../actions/Auth'
import { useForm } from '../hooks/useForm'
import '../styles/styleslogin.scss'

export const LoginScreen = () => { 
    
    const dispatch = useDispatch() 
    const {loading} = useSelector(state => state.ui)  

    const [formValues,handleInputChange]=useForm({
        email:'', 
        password:''
    }) 

    const {email,password} = formValues;

    const handlelogin = (e) => { 
        e.preventDefault()
        dispatch(logearUsuario(email,password))
    }

    const handleGoogle = () => {
       dispatch(startGoogleLogin())
    }

    return (
        <div className="loginprincipal">  
            <div className="login"> 
                <h1>inicia sesion</h1> 
                <br /> 
                <form 
                onSubmit={handlelogin}
                > 
                    <input 
                    type="text" 
                    placeholder="email" 
                    name="email" 
                    onChange={handleInputChange} 
                    value={email} 
                    
                    />     
                    <input 
                    type="password" 
                    placeholder="password" 
                    name="password"  
                    onChange={handleInputChange} 
                    value={password} 
                    
                    />  
                     
                    <button 
                    type="submit"  
                    disabled={loading}> 
                    login    
                    </button> 
                    
                    <Link  to="/registros/register"> 
                    aun no te registraste?
                    </Link>    
                    

                    <div onClick={handleGoogle} className="auth__social-networks"> 
                    <span > 
                    <b>iniciar sesión con redes sociales</b>
                    </span> 
                    <span> 
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </span>
                    <span >
                    <b>Inicia sesión con Google</b>
                    </span>
                
            </div>    
        </form> 

            </div>
            
        </div>
    )
}
