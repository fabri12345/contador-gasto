import { Types } from "../components/types/Types";

const initialState = {
    coleccioneshogar: [], 
    active: null, 
    
}



export const gastosReducerHogar = (state={initialState},action) => {
    switch (action.type) { 
        case Types.gastoactive:
            return{
                ...state, 
                active:{
                    ...action.payload
                }
            }  
        case Types.agregarnuevogastohogar:
            return{
                ...state, 
                coleccioneshogar: [action.payload, ...state.coleccioneshogar]
            } 
        case Types.cargargastohogar: 
            return{
                ...state, 
                coleccioneshogar: [...action.payload]
            } 
        case Types.guardargastohogar:
            return{
                ...state, 
                coleccioneshogar:state.coleccioneshogar.map( 
                    gasto => gasto.id === action.payload.id 
                    ? action.payload.gasto 
                    : gasto
                    ), 
                    
                } 
        case Types.eliminargastohogar:
            return{ 
                ...state, 
                active: null, 
                coleccioneshogar: state.coleccioneshogar.filter( 
                    gasto => gasto.id !== action.payload
                ) 

            } 
            case Types.borrartodoalfinalizarsesionhogar:
                return{
                    ...state, 
                    active:null, 
                    coleccioneshogar:[]
                } 
               
        
    
        default:
            return state;
    }
}