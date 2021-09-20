import React, { useState } from 'react'
import { ContadorGastos } from './ContadorGastos'
import { NavBar } from './NavBar'
import { SideBar } from './SideBar'
import { SumaTotalMes } from './SumaTotalMes' 
import '../styles/paginaprincipal.scss'
import { ColeccionesGastos } from './ColeccionesGastos'
import { useSelector } from 'react-redux'
import { dataBase } from '../../firestone/Firestone-config'



export const PaginaPrincipal = () => {  
    
    const {active} = useSelector(state => state.gastos)

    const [state1, setstate1] = useState(null) 
    
    const {uid} = useSelector(state => state.auth) 

    const [sumaTotal, setsumaTotal] = useState(0)

   

    const handlechange = () => {
        setstate1(active)
    } 
    const cambiar = () => {
        obtenerSumaTotal() 
        
    } 
    const sacarPagina = () => {
        setstate1(true) 
        
    }  
    
    const obtenerSumaTotal = async() => { 
    

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
        
        setsumaTotal(acumulador5 + acumulador4 + acumulador3 + acumulador2 + acumulador1) 
    }
      

    
    

    

    return (
        <div onMouseOver={cambiar} className="contenedorprincipal"> 
            <div  className="colecc"> 
                {state1 === active  
                ?
                <ColeccionesGastos sacarPagina={sacarPagina} /> 
                : 
                ""

                }    
                </div>   
            <div className="contenedor"> 
                
                <div className="navbar"> 
                    <NavBar handlechange={handlechange}/>
                </div> 
                <div className="sidebar"> 
                    <SideBar />   
                </div> 
                <div className="contadorgastos"> 
                    { active ?
                        <ContadorGastos/> 
                        : 
                        <div className="pantallasidebar"> 
                            <div> 
                                <h1>selecciona una seccion en colecciones y crea tu gasto</h1> 
                            </div> 
                        </div> 

                    }
                </div> 
                <div className="sumadelmes"> 
                    <SumaTotalMes sumaTotal={sumaTotal}/>
                </div> 
                
                
                

            </div>
            
            
        </div>
    )
}
