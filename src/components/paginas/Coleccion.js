
import moment from 'moment';
import React from 'react'; 
import { useDispatch } from 'react-redux';
import { activeGasto } from '../../actions/Gastos';
import '../styles/coleccion.scss'

export const Coleccion = ({id,gasto,fecha,objeto}) => { 
    
    const datafecha = moment(fecha)  

    const dispatch = useDispatch()

    const handleEntryClick = () => { 
        dispatch(activeGasto(id, {
            gasto,fecha,objeto
        }))  
        
    } 

    

    

    return (
        <div className="contenedorcoleccion" 
        onClick={handleEntryClick } 
        > 
            <div> 
            <h1>{datafecha.format("dddd, MMMM Do YYYY, h:mm:ss a")}</h1> 
            <h1>{objeto}</h1> 
            <h1>{gasto}</h1>
            </div>
            
        </div> 
    )
}
