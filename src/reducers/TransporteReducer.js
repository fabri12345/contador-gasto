import { Types } from "../components/types/Types";

const initialState = {
    coleccionestransporte: [], 
    active: null, 
    
}



export const gastosReducerTransporte = (state={initialState},action) => {
    switch (action.type) { 
        case Types.gastoactive:
            return{
                ...state, 
                active:{
                    ...action.payload
                }
            }  
            case Types.agregarnuevogastotransporte:
                return{
                    ...state, 
                    coleccionestransporte: [action.payload, ...state.coleccionestransporte]
                }  
        case Types.cargargastotransporte: 
            return{
                ...state, 
                coleccionestransporte: [...action.payload]
            } 
        case Types.guardargastotransporte:
            return{
                ...state, 
                coleccionestransporte:state.coleccionestransporte.map(
                    gasto => gasto.id === action.payload.id 
                    ? action.payload.gasto 
                    : gasto
                    ), 
                    
                } 
                case Types.eliminargastotransporte:
                    return{ 
                        ...state, 
                        active: null, 
                        coleccionestransporte: state.coleccionestransporte.filter( 
                            gasto => gasto.id !== action.payload
                        ) 
        
                    } 
                    case Types.borrartodoalfinalizarsesiontransporte:
                        return{
                            ...state, 
                            active:null, 
                            coleccionestransporte:[]
                        } 
                       
        
    
        default:
            return state;
    }
}