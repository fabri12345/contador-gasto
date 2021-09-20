import React from 'react'
import { Provider } from 'react-redux'
import { AppRouter } from './routers/AppRouter'
import { Store } from './store/Store'

export const ContadorDeGastos = () => {
    return (
        <div> 
            <Provider store={Store}> 
                <AppRouter/>
            </Provider>
            
        </div>
    )
}
