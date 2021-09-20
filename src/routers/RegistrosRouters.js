import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { LoginScreen } from '../components/cajaregistro/LoginScreen'
import { RegisterScreen } from '../components/cajaregistro/RegisterScreen'

export const RegistrosRouters = () => {
    return (
        <div className="registros-main"> 
            <div className="registro-contenedor">  
                <Switch> 
                    <Route path="/registros/login" component={ LoginScreen}/> 
                    <Route path="/registros/register" component={RegisterScreen}/> 
                    <Redirect to="/registros/login"/>
                </Switch>

            </div>
            
        </div>
    )
}
