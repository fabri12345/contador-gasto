import Swal from "sweetalert2";
import { loadgastoshogar } from "../components/helpers/LoadGastoHogar";
import { Types } from "../components/types/Types";
import { dataBase } from "../firestone/Firestone-config";



export const crearGastohogar = () => {
    return async(dispatch,getState ) => {  

        const {uid} = getState().auth; 

        const nuevogasto = {
            objeto: '', 
            gasto: '0', 
            fecha: new Date().getTime()
        } 

        const doc = await dataBase.collection(`${uid}/casa/gastos`).add(nuevogasto) 

        dispatch(activeGastohogar(doc.id, nuevogasto))

        dispatch(agregarGastohogar(doc.id,nuevogasto))

    }
} 

export const agregarGastohogar = (id,gasto) => ({
    type: Types.agregarnuevogastohogar, 
    payload:{
        id, ...gasto
    }
})

export const activeGastohogar = (id,gasto) => ({
    type: Types.gastoactive, 
    payload:{
        id, 
        ...gasto
    }
}) 

export const startloadingGastoshogar = (uid) => {
    return async(dispatch) => {
        const gastosind = await loadgastoshogar(uid) 
        dispatch(setGastoshogar(gastosind))
    }
}

export const setGastoshogar = (gasto) => ({
    type: Types.cargargastohogar, 
    payload:gasto
}) 

export const startSaveGasto2 = (gasto) => {
    return async(dispatch,getState) => { 
        const {uid} = getState().auth; 

        const gastoFirestone = {...gasto}
        delete gastoFirestone.id 

        await dataBase.doc(`${uid}/casa/gastos/${gasto.id}`).update(gastoFirestone) 
        
        dispatch(actualizarGastoHogar(gasto.id , gastoFirestone)) 

        Swal.fire('guardado' ,gasto.objeto,'success')
    }
} 

export const actualizarGastoHogar = (id,gasto) => ({
    type:Types.guardargastohogar, 
    payload:{
        id,  
        gasto:{
            id, 
            ...gasto
        }
    }
}) 

export const EliminarGastoHogar = (id) => {
    return async(dispatch,getState) => {
        
        const {uid} = getState().auth 
        
        await dataBase.doc(`${uid}/casa/gastos/${id}`).delete() 

        dispatch(sacarGastoHogar(id)) 

        Swal.fire('eliminado' ,id,'success')
    }
} 

export const sacarGastoHogar = (id) => ({
    type:Types.eliminargastohogar, 
    payload: id
}) 

export const gastoClearLogoutHogar = () => ({
    type: Types.borrartodoalfinalizarsesionhogar, 
    
}) 
export const setGasto3 = (gasto) => ({
    type: Types.buscargastohogar, 
    payload: gasto
})