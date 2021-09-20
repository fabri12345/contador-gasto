import Swal from "sweetalert2";
import { loadgastosImpuesto } from "../components/helpers/LoadGastoImpuesto";
import { Types } from "../components/types/Types";
import { dataBase } from "../firestone/Firestone-config";



export const crearGastoImpuesto = () => {
    return async(dispatch,getState ) => {  

        const {uid} = getState().auth;  

        const {active} = getState().gastos;

        const nuevogasto = {
            objeto: '', 
            gasto: '0', 
            fecha: new Date().getTime()
        } 

        const doc = await dataBase.collection(`${uid}/impuesto/gastos`).add(nuevogasto)  

        

        dispatch(activeGastoImpuesto(doc.id, nuevogasto)) 

        dispatch(agregarGastoImpuesto(doc.id,nuevogasto))

        

    }
} 

export const agregarGastoImpuesto = (id,gasto) => ({
    type: Types.agregarnuevogastoimpuestos, 
    payload:{
        id, ...gasto
    }
})

export const activeGastoImpuesto = (id,gasto) => ({
    type: Types.gastoactive, 
    payload:{
        id, 
        ...gasto
    }
}) 

export const startloadingGastosImpuesto = (uid) => {
    return async(dispatch) => {
        const gastosind = await loadgastosImpuesto(uid) 
        dispatch(setGastosImpuesto(gastosind))
    }
}

export const setGastosImpuesto = (gasto) => ({
    type: Types.cargargastoimpuestos, 
    payload:gasto
}) 

export const startSaveGasto3 = (gasto) => {
    return async(dispatch,getState) => { 
        const {uid} = getState().auth; 

        const gastoFirestone = {...gasto}
        delete gastoFirestone.id 

        await dataBase.doc(`${uid}/impuesto/gastos/${gasto.id}`).update(gastoFirestone) 
        
        dispatch(actualizarGastoImpuesto(gasto.id,gastoFirestone)) 

        Swal.fire('guardado' ,gasto.objeto,'success')
    }
} 

export const actualizarGastoImpuesto = (id,gasto) => ({
    type:Types.guardargastoimpuestos, 
    payload:{
        id,  
        gasto:{
            id, 
            ...gasto
        }
    }
}) 

export const EliminarGastoImpuesto = (id) => {
    return async(dispatch,getState) => {
        
        const {uid} = getState().auth 
        
        await dataBase.doc(`${uid}/impuesto/gastos/${id}`).delete() 

        dispatch(sacarGasto(id)) 

        Swal.fire('eliminado' ,id,'success')
    }
} 

export const sacarGasto = (id) => ({
    type:Types.eliminargastoimpuestos, 
    payload: id
}) 

export const gastoClearLogoutImpuesto = () => ({
    type: Types.borrartodoalfinalizarsesionimpuestos, 
    
}) 

export const setGasto2 = (gasto) => ({
    type: Types.buscargastoimpuesto, 
    payload: gasto
})