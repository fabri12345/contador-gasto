//import { useSelector } from "react-redux"
import { dataBase } from "../../firestone/Firestone-config"

export const Buscador = async(uid) => { 
    
    
    
    const gastosCotidianos = await dataBase.collection(`${uid}/hogar/gastos`).get() 
    const gastosIndustrial = await dataBase.collection(`${uid}/industrial/gastos`).get()  
    const gastosHogar = await dataBase.collection(`${uid}/casa/gastos`).get() 
    const gastosTransporte = await dataBase.collection(`${uid}/transporte/gastos`).get()  
    const gastosImpuestos = await dataBase.collection(`${uid}/impuesto/gastos`).get() 

    let Toma = []
    gastosCotidianos.forEach(snapHijo => {
        Toma.push({ 
            id: snapHijo.id,
            ...snapHijo.data()
        })
    }) 
    gastosIndustrial.forEach(snapHijo => {
        Toma.push({ 
            id: snapHijo.id,
            ...snapHijo.data()
        })
    })  
    gastosHogar.forEach(snapHijo => {
        Toma.push({ 
            id: snapHijo.id,
            ...snapHijo.data()
        })
    }) 
    gastosTransporte.forEach(snapHijo => {
        Toma.push({ 
            id: snapHijo.id,
            ...snapHijo.data()
        })
    })  
    gastosImpuestos.forEach(snapHijo => {
        Toma.push({ 
            id: snapHijo.id,
            ...snapHijo.data()
        })
    })  
   
    return Toma;
    
    //let nuevoArray = Toma.filter(e => e.objeto.toLowerCase().indexOf(value) > -1 )

    

    
    
}