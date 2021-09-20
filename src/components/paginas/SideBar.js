import React from 'react'; 
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { crearGastoImpuesto } from '../../actions/GastoImpuesto';
import { crearGasto } from '../../actions/Gastos';
import { crearGastohogar } from '../../actions/GastosHogar';
import { crearGastoindustrial } from '../../actions/GastosIndustrial';
import { crearGastoTransporte } from '../../actions/GastoTransporte';
import '../styles/sidebar.scss'


export const SideBar = () => { 

    const [Hover1, setHover1] = useState(false) 

    

    const dispatch = useDispatch()

    const addGasto = () => {
        dispatch(crearGasto()) 
        setHover1(false) 
        
    } 
    const addGastoIndustrial = () => {
        dispatch(crearGastoindustrial()) 
        setHover1(false) 
       
    }  
    const addGastoHogar = () => {
        dispatch(crearGastohogar()) 
        setHover1(false) 
        
    } 
    const addGastoTransporte = () => {
        dispatch(crearGastoTransporte()) 
        setHover1(false) 
        
    }  
    const addGastoImpuesto = () => {
        dispatch(crearGastoImpuesto()) 
        setHover1(false) 
        
    } 
    return (
        <div className="contenedorsidebar">
            <div  
               
            onMouseEnter={() => setHover1(true)}  
            onMouseLeave={() => setHover1(false)} 
            > 
                <h1 >colecciones<i className="fa fa-caret-down"></i> </h1> 
                { Hover1 ?
                <ul className="animate__animated animate__backInDown"> 
                    <li onClick={addGasto}>gastos cosas</li> 
                    <li onClick={addGastoIndustrial}>gasto industrial</li> 
                    <li onClick={addGastoHogar}>gasto hogar</li> 
                    <li onClick={addGastoImpuesto}>gasto impuestos</li> 
                    <li onClick={addGastoTransporte}>gasto transporte</li>    
                </ul> 
                : 
                "" 
                } 
                
            </div> 
            
        </div>
    )
}
