
import { dataBase } from "../../firestone/Firestone-config"


export const obtenerSumaTotal = async(uid) => { 
    

    const Total = await dataBase.collection(`${uid}/hogar/gastos`).get() 
    const Total1 = await dataBase.collection(`${uid}/industrial/gastos`).get()   
    const Total2 = await dataBase.collection(`${uid}/casa/gastos`).get() 
    const Total3 = await dataBase.collection(`${uid}/transporte/gastos`).get() 
    const Total4 = await dataBase.collection(`${uid}/impuesto/gastos`).get()

    const toma = [] 

    Total.forEach(snapHijo => {
        toma.push({
            ...snapHijo.data()
        })
    }) 
    let acumulador1 = 0
    toma.map( e => {
        acumulador1 = parseFloat( acumulador1 ) + parseFloat( e.gasto )
    }) 
    

    const toma1 = [] 

    Total1.forEach(snapHijo => {
        toma1.push({
            ...snapHijo.data()
        })
    }) 
    let acumulador2 = 0
    toma1.map( e => {
        acumulador2 = parseFloat( acumulador2 ) + parseFloat( e.gasto )
    }) 
    

    const toma2 = [] 

    Total2.forEach(snapHijo => {
        toma2.push({
            ...snapHijo.data()
        })
    }) 
    let acumulador3 = 0
    toma2.map( e => {
        acumulador3 = parseFloat( acumulador3 ) + parseFloat( e.gasto )
    }) 
    

    const toma3 = [] 

    Total3.forEach(snapHijo => {
        toma3.push({
            ...snapHijo.data()
        })
    }) 
    let acumulador4 = 0
    toma3.map( e => {
        acumulador4 = parseFloat( acumulador4 ) + parseFloat( e.gasto )
    }) 
    
    
    const toma4 = [] 

    Total4.forEach(snapHijo => {
        toma4.push({
            ...snapHijo.data()
        })
    }) 
    let acumulador5 = 0
    toma4.map( e => {
        acumulador5 = parseFloat( acumulador5 ) + parseFloat( e.gasto )
    }) 
    
    return (acumulador5 + acumulador4 + acumulador3 + acumulador2 + acumulador1) 
}
