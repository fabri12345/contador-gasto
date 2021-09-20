import { Types } from "../components/types/Types"; 

export const setError = (error) => ({
    type: Types.seterror, 
    payload: error
})
export const removeError = () => ({
    type: Types.removeerror
  
})  
export const startLoading = () => ({
    type: Types.startlogin
}) 
export const finishLoading = () => ({
    type: Types.finishlogin
})