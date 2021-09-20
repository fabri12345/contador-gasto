import { Types } from '../components/types/Types';
import {firebase, google} from '../firestone/Firestone-config' 
import { gastoClearLogoutImpuesto } from './GastoImpuesto';
import { gastoClearLogout } from './Gastos';
import { gastoClearLogoutHogar } from './GastosHogar';
import { gastoClearLogoutIndustrial } from './GastosIndustrial';
import { gastoClearLogoutTransporte } from './GastoTransporte';
import { finishLoading, startLoading } from './Ui'; 



export const crearUsuario = (email,password,name) => { 
  
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email,password) 
        .then( async ({user}) => {
            await user.updateProfile({displayName:name})
            dispatch(Login(user.uid,user.displayName)) 
            console.log(user) 
            
        }) 
        .catch(e => {
            console.log(e) 

        }) 
        
    }
} 

export const logearUsuario = (email,password) => { 
    return (dispatch) => { 
        dispatch(startLoading())
        firebase.auth().signInWithEmailAndPassword(email,password) 
        .then(({user}) => {
            dispatch(Login(user.uid,user.displayName)) 
            dispatch(finishLoading())
        }) 
        .catch(e => {
            console.log(e) 
            dispatch(finishLoading())
        })
    }

} 

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(google)  
        .then(({user}) => { 
            dispatch(Login(user.uid,user.displayName))
        }) 

        
    }
} 

export const startlogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut(); 
        dispatch(Logout()) 
        dispatch(gastoClearLogout())  
        dispatch(gastoClearLogoutHogar()) 
        dispatch(gastoClearLogoutImpuesto()) 
        dispatch(gastoClearLogoutIndustrial()) 
        dispatch(gastoClearLogoutTransporte())
        

    }
}


export const Login = (uid,displayName) => ({
    type:Types.login, 
    payload: {
        uid, 
        displayName
    }
}) 

export const Logout = () => ({
    type:Types.logout
})