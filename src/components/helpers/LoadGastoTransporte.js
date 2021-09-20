import { dataBase } from "../../firestone/Firestone-config"


export const loadgastostransporte = async(uid) => {
    const gastosSnaptransporte = await dataBase.collection(`${uid}/transporte/gastos`).get() 

    const gastostransporte = []  

    gastosSnaptransporte.forEach(snapHijo => {
        gastostransporte.push({
            id: snapHijo.id, 
            ...snapHijo.data()
        })
    }) 

   

    return gastostransporte;


}