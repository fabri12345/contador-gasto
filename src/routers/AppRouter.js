import React, { useState } from 'react'
import { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    
    Redirect,
   } from "react-router-dom";
import { PaginaPrincipal } from '../components/paginas/PaginaPrincipal';
import { RegistrosRouters } from './RegistrosRouters'; 
import {firebase} from '../firestone/Firestone-config'
import { useDispatch } from 'react-redux';
import { Login } from '../actions/Auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import {  startBuscarGastos, startloadingGastos, startSumarGastos } from '../actions/Gastos';
import { startloadingGastosindustrail } from '../actions/GastosIndustrial';
import { startloadingGastoshogar } from '../actions/GastosHogar';
import { startloadingGastosTransporte } from '../actions/GastoTransporte';
import { startloadingGastosImpuesto } from '../actions/GastoImpuesto';

export const AppRouter = () => {  

    const dispatch = useDispatch() 

    const [chequiar, setchequiar] = useState(true) 

    const [islogin, setislogin] = useState(false)

    useEffect(() => {
       firebase.auth().onAuthStateChanged((user) => {
           if (user?.uid) { 
               dispatch(Login(user.uid,user.displayName)) 
               setislogin(true) 
                dispatch(startloadingGastos(user.uid)) 
                dispatch(startloadingGastosindustrail(user.uid)) 
                dispatch(startloadingGastoshogar(user.uid)) 
                dispatch(startloadingGastosTransporte(user.uid)) 
                dispatch(startloadingGastosImpuesto(user.uid)) 
                dispatch(startBuscarGastos(user.uid)) 
                dispatch(startSumarGastos(user.uid))
           } else {
               setislogin(false)
           }
           setchequiar(false)
       })
    }, [dispatch,setchequiar,setislogin]) 

    if (chequiar) { 
        return <h1>espere..</h1>
        
    }

    return (
        <Router> 
            <div> 
                <Switch> 
                    <PublicRoute path="/registros" component={RegistrosRouters} isAuthenticated={islogin}/> 
                    <PrivateRoute exact path="/pagprincipal" component={PaginaPrincipal} isAuthenticated={islogin}/> 
                    <Redirect to="/registros"/>
                </Switch>
            </div>
        </Router>
    )
}
