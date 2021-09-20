import { Types } from "../components/types/Types"


export const authReducer = (state={},action) => {
    switch (action.type) {
        case Types.login: 
            return{
                ...state, 
                uid: action.payload.uid, 
                name: action.payload.displayName
            }  
        case Types.logout: 
            return{
                
            }
            
           
    
        default:
           return state
    }
}