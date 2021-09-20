import { dataBase } from "../../firestone/Firestone-config"


export const loadgastosImpuesto = async(uid) => {
    const gastosSnapimpuesto = await dataBase.collection(`${uid}/impuesto/gastos`).get() 

    const gastosimpuesto = []  

    gastosSnapimpuesto.forEach(snapHijo => {
        gastosimpuesto.push({
            id: snapHijo.id, 
            ...snapHijo.data()
        })
    }) 

    

    return gastosimpuesto;


}