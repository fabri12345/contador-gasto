import Swal from "sweetalert2";
import {  loadgastosindustrail } from "../components/helpers/LoadGastoIndustrial";
import { Types } from "../components/types/Types";
import { dataBase } from "../firestone/Firestone-config";



export const crearGastoindustrial = () => {
    return async(dispatch,getState ) => {  

        const {uid} = getState().auth; 

        const nuevogasto = {
            objeto: '', 
            gasto: '0', 
            fecha: new Date().getTime()
        } 

        const doc = await dataBase.collection(`${uid}/industrial/gastos`).add(nuevogasto) 

        dispatch(activeGastoindustrail(doc.id, nuevogasto)) 

        dispatch(agregarGastoIndustrial(doc.id,nuevogasto))

       

    }
}  

export const agregarGastoIndustrial = (id,gasto) => ({
    type: Types.agregarnuevogastoindustrial, 
    payload:{
        id, ...gasto
    }
})

export const activeGastoindustrail = (id,gasto) => ({
    type: Types.gastoactive, 
    payload:{
        id, 
        ...gasto
    }
}) 

export const startloadingGastosindustrail = (uid) => {
    return async(dispatch) => {
        const gastosind = await loadgastosindustrail(uid) 
        dispatch(setGastosindustrial(gastosind))
    }
}

export const setGastosindustrial = (gasto) => ({
    type: Types.cargargastoindustrial, 
    payload:gasto
}) 

export const startSaveGasto1 = (gasto) => {
    return async(dispatch,getState) => { 
        const {uid} = getState().auth; 

        const gastoFirestone = {...gasto}
        delete gastoFirestone.id 

        await dataBase.doc(`${uid}/industrial/gastos/${gasto.id}`).update(gastoFirestone) 
        
        dispatch(actualizarGastoIndustrial(gasto.id,gastoFirestone))

        Swal.fire('guardado' ,gasto.objeto,'success')
    }
} 

export const actualizarGastoIndustrial = (id,gasto) => ({
    type:Types.guardargastoindustrial, 
    payload:{
        id,  
        gasto:{
            id, 
            ...gasto
        }
    }
}) 

export const EliminarGastoIndustrial = (id) => {
    return async(dispatch,getState) => {
        
        const {uid} = getState().auth 
        
        await dataBase.doc(`${uid}/industrial/gastos/${id}`).delete() 

        dispatch(sacarGasto(id)) 

        Swal.fire('eliminado' ,id,'success')
    }
} 

export const sacarGasto = (id) => ({
    type:Types.eliminargastoindustrial, 
    payload: id
}) 

export const gastoClearLogoutIndustrial = () => ({
    type: Types.borrartodoalfinalizarsesionindustrial, 
    
}) 

export const setGasto4 = (gasto) => ({
    type: Types.buscargastoindustrial, 
    payload: gasto
})