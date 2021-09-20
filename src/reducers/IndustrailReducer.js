import { Types } from "../components/types/Types";

const initialState = {
    coleccionesindustrial: [], 
    active: null, 
    
}



export const gastosReducerIndustrail = (state={initialState},action) => {
    switch (action.type) { 
        case Types.gastoactive:
            return{
                ...state, 
                active:{
                    ...action.payload
                }
            } 
            case Types.agregarnuevogastoindustrial:
                return{
                    ...state, 
                    coleccionesindustrial: [action.payload, ...state.coleccionesindustrial]
                }  
        case Types.cargargastoindustrial: 
            return{
                ...state, 
                coleccionesindustrial: [...action.payload]
            } 
        case Types.guardargastoindustrial:
            return{
                ...state, 
                coleccionesindustrial:state.coleccionesindustrial.map(
                    gasto => gasto.id === action.payload.id 
                    ? action.payload.gasto 
                    : gasto
                ), 
                
            } 
            case Types.eliminargastoindustrial:
                return{ 
                    ...state, 
                    active: null, 
                    coleccionesindustrial: state.coleccionesindustrial.filter( 
                        gasto => gasto.id !== action.payload
                    ) 
    
                } 
                case Types.borrartodoalfinalizarsesionindustrial:
                    return{
                        ...state, 
                        active:null, 
                        coleccionesindustrial:[]
                    } 
                    
        
        
    
        default:
            return state;
    }
}