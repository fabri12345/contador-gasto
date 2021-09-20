import { Types } from "../components/types/Types";

const initialState = {
    coleccionesimpuesto: [], 
    active: null, 
    
}



export const gastosReducerImpuesto = (state={initialState},action) => {
    switch (action.type) { 
        case Types.gastoactive:
            return{
                ...state, 
                active:{
                    ...action.payload
                }
            }  
            case Types.agregarnuevogastoimpuestos:
                return{
                    ...state, 
                    coleccionesimpuesto: [action.payload, ...state.coleccionesimpuesto]
                } 
        case Types.cargargastoimpuestos: 
            return{
                ...state, 
                coleccionesimpuesto: [...action.payload]
            } 
        case Types.guardargastoimpuestos:
            return{
                ...state, 
                coleccionesimpuesto:state.coleccionesimpuesto.map( 
                    gasto => gasto.id === action.payload.id 
                    ? action.payload.gasto 
                    : gasto
                ), 
                
            } 
            case Types.eliminargastoimpuestos:
                return{ 
                    ...state, 
                    active: null, 
                    coleccionesimpuesto: state.coleccionesimpuesto.filter( 
                        gasto => gasto.id !== action.payload
                    ) 
    
                } 
                case Types.borrartodoalfinalizarsesionimpuestos:
                    return{
                        ...state, 
                        active:null, 
                        coleccionesimpuesto:[]
                    } 
                    
        
    
        default:
            return state;
    }
}