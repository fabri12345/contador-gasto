import Swal from "sweetalert2";
import { loadgastostransporte } from "../components/helpers/LoadGastoTransporte";
import { Types } from "../components/types/Types";
import { dataBase } from "../firestone/Firestone-config";



export const crearGastoTransporte = () => {
    return async(dispatch,getState ) => {  

        const {uid} = getState().auth; 

        const nuevogasto = {
            objeto: '', 
            gasto: '0', 
            fecha: new Date().getTime()
        } 

        const doc = await dataBase.collection(`${uid}/transporte/gastos`).add(nuevogasto) 

        dispatch(activeGastoTransporte(doc.id, nuevogasto))

        dispatch(agregarGastoTransporte(doc.id,nuevogasto))

    }
} 

export const agregarGastoTransporte = (id,gasto) => ({
    type: Types.agregarnuevogastotransporte, 
    payload:{
        id, ...gasto
    }
})

export const activeGastoTransporte = (id,gasto) => ({
    type: Types.gastoactive, 
    payload:{
        id, 
        ...gasto
    }
}) 

export const startloadingGastosTransporte = (uid) => {
    return async(dispatch) => {
        const gastosind = await loadgastostransporte(uid) 
        dispatch(setGastosTransporte(gastosind))
    }
}

export const setGastosTransporte = (gasto) => ({
    type: Types.cargargastotransporte, 
    payload:gasto
}) 

export const startSaveGasto4 = (gasto) => {
    return async(dispatch,getState) => { 
        const {uid} = getState().auth; 

        const gastoFirestone = {...gasto}
        delete gastoFirestone.id 

        await dataBase.doc(`${uid}/transporte/gastos/${gasto.id}`).update(gastoFirestone) 
        
        dispatch(actualizarGastoTransporte(gasto.id,gastoFirestone)) 

        Swal.fire('guardado' ,gasto.objeto,'success')

    }
} 

export const actualizarGastoTransporte = (id,gasto) => ({
    type:Types.guardargastotransporte, 
    payload:{
        id,  
        gasto:{
            id, 
            ...gasto
        }
    }
}) 

export const EliminarGastoTransporte = (id,gasto) => {
    return async(dispatch,getState) => {
        
        const {uid} = getState().auth 
        
        await dataBase.doc(`${uid}/transporte/gastos/${id}`).delete() 

        dispatch(sacarGasto(id)) 

        Swal.fire('eliminado' ,id,'success')
    }
} 

export const sacarGasto = (id) => ({
    type:Types.eliminargastotransporte, 
    payload: id
}) 

export const gastoClearLogoutTransporte = () => ({
    type: Types.borrartodoalfinalizarsesiontransporte, 
    
}) 

export const setGasto5 = (gasto) => ({
    type: Types.buscargastotransporte, 
    payload: gasto
})