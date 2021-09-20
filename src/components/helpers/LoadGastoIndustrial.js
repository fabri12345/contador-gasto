import { dataBase } from "../../firestone/Firestone-config"


export const loadgastosindustrail = async(uid) => {
    const gastosSnapindustrail = await dataBase.collection(`${uid}/industrial/gastos`).get() 

    const gastosindustrial = []  

    gastosSnapindustrail.forEach(snapHijo => {
        gastosindustrial.push({
            id: snapHijo.id, 
            ...snapHijo.data()
        })
    }) 

   

    return gastosindustrial;


}