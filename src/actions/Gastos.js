
import Swal from "sweetalert2";
import { loadgastos } from "../components/helpers/LoadGastos";
import { obtenerSumaTotal } from "../components/helpers/ObtenerSumaTotal";
import { Buscador } from "../components/paginas/Buscador";
import { Types } from "../components/types/Types";
import { dataBase } from "../firestone/Firestone-config";
import { setGasto2 } from "./GastoImpuesto";
import { setGasto3 } from "./GastosHogar";
import { setGasto4 } from "./GastosIndustrial";
import { setGasto5 } from "./GastoTransporte";



export const crearGasto = () => {
    return async(dispatch,getState ) => {  

        const {uid} = getState().auth; 

        const nuevogasto = {
            objeto: '', 
            gasto: '0', 
            fecha: new Date().getTime()
        } 

        const doc = await dataBase.collection(`${uid}/hogar/gastos`).add(nuevogasto) 
        
        dispatch(activeGasto(doc.id, nuevogasto)) 
        
        dispatch(agregarGasto(doc.id,nuevogasto))

        }
}  

export const agregarGasto = (id,gasto) => ({
    type: Types.agregarnuevogasto, 
    payload:{
        id, ...gasto
    }
})

export const activeGasto = (id,gasto) => ({
    type: Types.gastoactive, 
    payload:{
        id, 
        ...gasto
    }
}) 

export const startloadingGastos = (uid) => {
    return async(dispatch) => {
        const gastos = await loadgastos(uid) 
        dispatch(setGastos(gastos))
    }
}  

export const setGastos = (gasto) => ({
    type: Types.cargargasto, 
    payload:gasto
}) 

export const startBuscarGastos = (uid) => {
    return async(dispatch) => {
        const gasto = await Buscador(uid) 
        dispatch(setGasto1(gasto)) 
        dispatch(setGasto2(gasto)) 
        dispatch(setGasto3(gasto)) 
        dispatch(setGasto4(gasto)) 
        dispatch(setGasto5(gasto))
    }
} 

export const setGasto1 = (gasto) => ({
    type: Types.buscargasto, 
    payload: gasto
})



export const startSaveGasto = (gasto) => {
    return async(dispatch,getState) => { 
        const {uid} = getState().auth; 
        
        const {active} = getState().gastos

        const gastoFirestone = {...gasto}
        delete gastoFirestone.id 

        await dataBase.doc(`${uid}/hogar/gastos/${active.id}`).update(gastoFirestone) 
        
        dispatch(actualizarGasto(active.id, gastoFirestone)) 

        Swal.fire('guardado' ,gasto.objeto,'success')

    }
} 

export const actualizarGasto = (id,gasto) => ({
    type:Types.guardargasto, 
    payload:{
        id,  
        gasto:{
            id, 
            ...gasto
        }
    }
}) 

export const EliminarGasto = (id) => {
    return async(dispatch,getState) => {
        
        const {uid} = getState().auth 
        
        await dataBase.doc(`${uid}/hogar/gastos/${id}`).delete() 

        dispatch(sacarGasto(id)) 

        Swal.fire('eliminado' ,id,'success')
    }
} 

export const sacarGasto = (id) => ({
    type:Types.eliminargasto, 
    payload: id
}) 

export const gastoClearLogout = () => ({
    type: Types.borrartodoalfinalizarsesion, 
    
}) 

export const startSumarGastos = (uid) => {
    return async(dispatch) => {
        const gastoSuma = await obtenerSumaTotal(uid) 
        dispatch(setGastoSuma(gastoSuma))
    }
}  

export const setGastoSuma = (gasto) => ({
    type: Types.sumagasto, 
    payload: gasto
})