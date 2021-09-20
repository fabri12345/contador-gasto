import { applyMiddleware, combineReducers, createStore,compose } from "redux";
import thunk from "redux-thunk";

import { authReducer } from "../reducers/AuthReducer";
import { gastosReducer } from "../reducers/GastosReducer";
import { gastosReducerHogar } from "../reducers/HogarReducer";
import { gastosReducerImpuesto } from "../reducers/ImpuestosReducer";
import { gastosReducerIndustrail } from "../reducers/IndustrailReducer";
import { gastosReducerTransporte } from "../reducers/TransporteReducer";
import { uireducer } from "../reducers/UiReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const Reducers = combineReducers({
    auth:authReducer, 
    ui:uireducer, 
    gastos:gastosReducer, 
    industrial:gastosReducerIndustrail, 
    hogar:gastosReducerHogar, 
    transporte:gastosReducerTransporte, 
    impuesto:gastosReducerImpuesto,
}) 

export const Store = createStore(
    Reducers, 
    composeEnhancers(
        applyMiddleware(thunk)
    )
)