import React from 'react' 
import { useDispatch } from 'react-redux'
import { Link} from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import '../styles/stylesregister.scss' 
import validator from 'validator'
import { crearUsuario } from '../../actions/Auth'
import { removeError, setError } from '../../actions/Ui'
import { useSelector } from 'react-redux'

export const RegisterScreen = () => { 

    const dispatch = useDispatch(); 
    
    const {msgerror} = useSelector(state => state.ui)

    const [formValues,handleInputChange]=useForm({
        name: '', 
        email: '', 
        password:'',  
        confirmpassword:''
    })  

    const {name,email,password,confirmpassword} = formValues; 
    
   

    const handleRegister = (e) => {  
        e.preventDefault()
        if (ifFormValid()) {
            dispatch(crearUsuario(email,password,name))
        }

    } 

    const ifFormValid = () => { 
        if (name.trim() == '') { 
            dispatch(setError('name is requiered')); 
            return false;
            
        } 
        else if (!validator.isEmail(email.trim())) { 
            dispatch(setError('email is requiered')) 
            return false;
            
        } 
        else if (password !== confirmpassword || password.length < 5) { 
            dispatch(setError('password debe coincidir')) 
            return false
            
        } 
        dispatch (removeError())
        return true;

    }




    return (
        <div className="registerprincipal">
            <div className="register"> 
                <h1>registrate</h1> 
                <br /> 
                <form 
                onSubmit={handleRegister}
                >  
                {
                msgerror && 
                (
                <div className="auth__alert-error">  
                    {msgerror} 
                </div> 
                )
                }
                
                    <input  
                    type="text" 
                    placeholder="name" 
                    name="name" 
                    onChange={handleInputChange} 
                    value={name} 
                    

                    
                    /> 
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
                    <input  
                    type="password" 
                    placeholder="confirmpassword" 
                    name="confirmpassword" 
                    onChange={handleInputChange} 
                    value={confirmpassword}  
                      
                    
                    /> 
                    <div> 
                    <button 
                    type="submit" 

                    > 
                        register
                    </button> 
                     
                    <Link to="/registros/login"> 
                    ya te registraste?
                    </Link>
                    </div>
                    
                    
                </form>
            </div>
        </div>
    )
}
