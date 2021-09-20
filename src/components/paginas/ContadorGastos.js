import React, { useEffect } from 'react' 
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { EliminarGastoImpuesto, startSaveGasto3 } from '../../actions/GastoImpuesto'
import { activeGasto, startSaveGasto, EliminarGasto } from '../../actions/Gastos'
import { EliminarGastoHogar, startSaveGasto2 } from '../../actions/GastosHogar'
import { EliminarGastoIndustrial, startSaveGasto1 } from '../../actions/GastosIndustrial'
import { EliminarGastoTransporte, startSaveGasto4 } from '../../actions/GastoTransporte'
import { useForm } from '../hooks/useForm'
import '../styles/contadorgastos.scss'

export const ContadorGastos = () => {  

    const {active} = useSelector(state => state.gastos)  
    

    const dispatch = useDispatch()

     

    const [formValues, handleInputChange,reset] = useForm(active) 
    
    const {objeto,gasto,id} = formValues 
    
    const activeId = useRef(active.id) 

    useEffect(() => {
        if (active.id !== activeId.current) { 
            reset(active) 
            activeId.current = active.id
            
        }
    }, [reset,active]) 

    useEffect(() => {
        dispatch(activeGasto(formValues.id, {...formValues}))
    }, [formValues,dispatch]) 

    

    const handleSave = () => {
        dispatch(startSaveGasto(active))
    } 

    const saveIndustrial = () => {
        dispatch(startSaveGasto1(active))
    } 
    const saveHogar = () => {
        dispatch(startSaveGasto2(active))
    } 
    const saveimpuesto = () => {
        dispatch(startSaveGasto3(active))
    } 
    const savetransporte = () => {
        dispatch(startSaveGasto4(active))
    }  
    
    const eliminarGasto1 = () => {
        dispatch(EliminarGastoHogar(id))
    } 
    const eliminarGasto2 = () => {
        dispatch(EliminarGasto(id))
    }  
    const eliminarGasto3 = () => {
        dispatch(EliminarGastoImpuesto(id))
    } 
    const eliminarGasto4 = () => {
        dispatch(EliminarGastoIndustrial(id))
    }  
    const eliminarGasto5 = () => {
        dispatch(EliminarGastoTransporte(id))
    }   

    
     

    const funcionesJuntasGuardar = () => {  
       
        if (isFormValid()) {
            handleSave() 
            saveIndustrial() 
            saveHogar() 
            saveimpuesto() 
            savetransporte() 
        }
            
        
        

}   
    const funcionesJuntasEliminar = () => [
    eliminarGasto1(), 
    eliminarGasto2(), 
    eliminarGasto3(), 
    eliminarGasto4(), 
    eliminarGasto5()
]

    const isFormValid = () => {
        if (objeto.trim() == '') { 
            funcionesJuntasEliminar()
            
        } 
        else if (gasto.trim() == '') { 
            funcionesJuntasEliminar()
            
        } 
        return true
    } 
    
    
    
    
    

    return (
        <div className="animate__animated animate__flash contenedorgastos"> 
            <div> 
                <h1>gastos</h1>
            </div >
            
                
                <div> 
                    
                    <input  
                    type="text"  
                    placeholder="objeto" 
                    name="objeto" 
                    value={objeto} 
                    onChange={handleInputChange} 
                    /> 
                </div>
                <div> 
                    <input  
                    type="number"  
                    placeholder="gasto" 
                    name="gasto"  
                    value={gasto} 
                    onChange={handleInputChange}
                    />
                </div>  
                
                <div> 
                    <button onClick={funcionesJuntasGuardar} > 
                        guardar gasto 
                    </button>
                </div>  
                <div> 
                    <button  onClick={funcionesJuntasEliminar}> 
                        eliminar gasto 
                    </button>
                </div> 
                
            
        </div>
    )
}
