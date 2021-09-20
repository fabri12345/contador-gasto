import { dataBase } from "../../firestone/Firestone-config"


export const loadgastoshogar = async(uid) => {
    const gastosSnaphogar = await dataBase.collection(`${uid}/casa/gastos`).get() 

    const gastoshogar = []  

    gastosSnaphogar.forEach(snapHijo => {
        gastoshogar.push({
            id: snapHijo.id, 
            ...snapHijo.data()
        })
    }) 

    

    return gastoshogar;


}