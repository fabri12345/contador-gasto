import { dataBase } from "../../firestone/Firestone-config"


export const loadgastos = async(uid) => {
    const gastosSnap = await dataBase.collection(`${uid}/hogar/gastos`).get() 

    const gastos = []  

    gastosSnap.forEach(snapHijo => {
        gastos.push({
            id: snapHijo.id, 
            ...snapHijo.data()
        })
    }) 

    

    return gastos;


} 

