import { Types } from "../components/types/Types";

const initialState = {
    colecciones: [], 
    active: null, 
    buscador: [], 
    suma: '',
}



export const gastosReducer = (state={initialState},action) => {
    switch (action.type) { 
        case Types.gastoactive:
            return{
                ...state, 
                active:{
                    ...action.payload
                }
            } 
        case Types.agregarnuevogasto:
            return{
                ...state, 
                colecciones: [action.payload, ...state.colecciones], 
                buscador: [action.payload, ...state.buscador]
            }   
            case Types.agregarnuevogastohogar:
            return{
                ...state, 
                buscador: [action.payload, ...state.buscador]
            }   
            case Types.agregarnuevogastoimpuestos:
            return{
                ...state, 
                buscador: [action.payload, ...state.buscador]
            }  
            case Types.agregarnuevogastoindustrial:
            return{
                ...state, 
                buscador: [action.payload, ...state.buscador]
            }  
            case Types.agregarnuevogastotransporte:
            return{
                ...state, 
                buscador: [action.payload, ...state.buscador]
            }    
            
        case Types.cargargasto: 
            return{
                ...state, 
                colecciones: [...action.payload]
            } 
        
            case Types.eliminargasto:
                return{ 
                    ...state, 
                    active: null, 
                    colecciones: state.colecciones.filter( 
                        gasto => gasto.id !== action.payload
                    ), 
                    buscador: state.buscador.filter( 
                        gasto => gasto.id !== action.payload
                    )  
    
                } 
            case Types.borrartodoalfinalizarsesion:
                return{
                    ...state, 
                    active:null, 
                    colecciones:[]
                } 
            case Types.buscargasto:
                return{
                    ...state, 
                    buscador: [...action.payload]
                } 
                case Types.sumagasto: 
                return {
                    ...state,  
                    suma: action.payload
                } 
                case Types.guardargasto:
                return{
                ...state, 
                colecciones:state.colecciones.map(
                    gasto => gasto.id === action.payload.id 
                    ? action.payload.gasto 
                    : gasto
                ), 
                buscador:state.buscador.map(
                    gasto => gasto.id === action.payload.id 
                    ? action.payload.gasto 
                    : gasto
                )
            } 
                
                case Types.guardargastohogar: 
                return {
                    ...state, 
                    buscador:state.buscador.map(
                        gasto => gasto.id === action.payload.id 
                        ? action.payload.gasto 
                        : gasto
                    ) 
                 

                } 
                case Types.guardargastoindustrial: 
                return {
                    ...state, 
                    buscador:state.buscador.map(
                        gasto => gasto.id === action.payload.id 
                        ? action.payload.gasto 
                        : gasto
                    ) } 
                    case Types.guardargastotransporte: 
                    return {
                    ...state, 
                    buscador:state.buscador.map(
                        gasto => gasto.id === action.payload.id 
                        ? action.payload.gasto 
                        : gasto
                    ) } 
                    case Types.guardargastoimpuestos: 
                    return {
                    ...state, 
                    buscador:state.buscador.map(
                        gasto => gasto.id === action.payload.id 
                        ? action.payload.gasto 
                        : gasto
                    ) }
        
    
        default:
            return state;
    }
}