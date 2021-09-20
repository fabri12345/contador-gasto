import { Types } from "../components/types/Types"

const initialState = {
    msgerror:null, 
    loading: false,
 
}

export const uireducer = (state={initialState},action) => {
    switch (action.type) {
        case Types.seterror: 
            return {
                ...state, 
                msgerror:action.payload 

            } 
            case Types.removeerror: 
                return{
                    ...state, 
                    msgerror:null
                } 
            case Types.startlogin: 
                return{
                    ...state, 
                    loading:true 

                } 
            case Types.finishlogin:
                return {
                    ...state, 
                    loading:false
                }

            
            
    
        default:
            return state;
    }
}