import React, { useEffect, useState } from 'react'; 
import { useSelector } from 'react-redux';
import { Coleccion } from './Coleccion';
import '../styles/Colecciones.scss'
import { dataBase } from '../../firestone/Firestone-config';
import { useForm } from '../hooks/useForm';





export const ColeccionesGastos = ({sacarPagina}) => { 

    const {colecciones} = useSelector(state => state.gastos); 
    
    const {coleccionesindustrial} = useSelector(state => state.industrial) 
    
    const {coleccioneshogar} = useSelector(state => state.hogar) 

    const {coleccionestransporte} = useSelector(state => state.transporte) 

    const {coleccionesimpuesto} = useSelector(state => state.impuesto)  

    const {uid} = useSelector(state => state.auth) 
    
    const {buscador} = useSelector(state => state.gastos) 

    

    const [ suma, setsuma ] = useState( 0 )  
    const [ suma1, setsuma1 ] = useState( 0 )   
    const [ suma2, setsuma2 ] = useState( 0 )  
    const [ suma3, setsuma3 ] = useState( 0 )  
    const [ suma4, setsuma4 ] = useState( 0 ) 
    
    
    
     
    
    const obtenerSuma = async() => { 
        
        const Suma = await dataBase.collection(`${uid}/hogar/gastos`).get() 
        
        const toma = [] 
    
        Suma.forEach(snapHijo => {
           toma.push({
               ...snapHijo.data()
           })
        }); 
        
        let acumulador = 0
        toma.map( e =>{
            acumulador = parseFloat( acumulador ) + parseFloat( e.gasto ) 
        } )
        setsuma( acumulador )
       
    } 
    const obtenerSuma1 = async() => { 
        
        const Suma = await dataBase.collection(`${uid}/industrial/gastos`).get() 
        
        const toma = [] 
    
        Suma.forEach(snapHijo => {
           toma.push({
               ...snapHijo.data()
           })
        }); 
         
        let acumulador = 0
        toma.map( e =>{
            acumulador = parseFloat( acumulador ) + parseFloat( e.gasto ) 
        } )
        setsuma1( acumulador )
       
    } 
    const obtenerSuma2 = async() => { 
        
        const Suma = await dataBase.collection(`${uid}/casa/gastos`).get() 
        
        const toma = [] 
    
        Suma.forEach(snapHijo => {
           toma.push({
               ...snapHijo.data()
           })
        }); 
       
        let acumulador = 0
        toma.map( e =>{
            acumulador = parseFloat( acumulador ) + parseFloat( e.gasto ) 
        } )
        setsuma2( acumulador )
       
    } 
    const obtenerSuma3 = async() => { 
        
        const Suma = await dataBase.collection(`${uid}/transporte/gastos`).get() 
        
        const toma = [] 
    
        Suma.forEach(snapHijo => {
           toma.push({
               ...snapHijo.data()
           })
        }); 
         
        let acumulador = 0
        toma.map( e =>{
            acumulador = parseFloat( acumulador ) + parseFloat( e.gasto ) 
        } )
        setsuma3( acumulador )
       
    } 
    const obtenerSuma4 = async() => { 
        
        const Suma = await dataBase.collection(`${uid}/impuesto/gastos`).get() 
        
        const toma = [] 
    
        Suma.forEach(snapHijo => {
           toma.push({
               ...snapHijo.data()
           })
        }); 
        
        let acumulador = 0
        toma.map( e =>{
            acumulador = parseFloat( acumulador ) + parseFloat( e.gasto ) 
        } )
        setsuma4( acumulador ) 
        
       
    } 
    
    
    useEffect(() => {

        obtenerSuma() 
        obtenerSuma1() 
        obtenerSuma2() 
        obtenerSuma3() 
        obtenerSuma4()  
        
        
         
        
        
        
        
    }, [])
    
    

    const [FormValues,HandleImputChange] = useForm({
        searchtext: ''
    }) 

    const {searchtext} = FormValues;  

    const getName = buscador.filter(e => e.objeto.toLowerCase().indexOf(searchtext) > -1 )

    const handleSubmit = (e) => {
        e.preventDefault()
    } 

    
   

    return (
        <div className="animate__animated animate__bounceInLeft contenedorcolecciones"> 
            <div> 
                <span onClick={sacarPagina} className="fa fa-arrow-circle-left"> 
                    <h3>seleccion un gasto para cambiar su contenido o para eliminarlo</h3>
                </span>
            </div>  
            <div> 
                <h2>buscador</h2> 
                <form onSubmit={handleSubmit}> 
                    <input 
                    type="text" 
                    placeholder="busca tu objeto de gasto"  
                    name="searchtext" 
                    value={searchtext} 
                    onChange={HandleImputChange}
                     /> 
                      </form>
                     <div> 
                     {  
                        searchtext === '' ?  
                        ""
                         :  
                         getName.map(gasto => ( 
                            <Coleccion   
                            key={gasto.id} 
                            {...gasto}
                           />
                            ))
                        
                        
                    }
                     </div>
                
            </div> 
            
            <div> 
                <h2>gastos cotidianos <i>$:{ suma.toFixed( 2 ) }</i>  </h2> 
            </div>
            <div onClick={sacarPagina}> 
                 
                {
                   colecciones.map(gasto => ( 
                        <Coleccion   
                       key={gasto.id} 
                       {...gasto}
                       />
                )) 
                }
            </div> 
            
            <div> 
                <h2>gastos industriales <i>$:{ suma1.toFixed( 2 ) }</i> </h2>    
            </div> 
            <div> 
            {
                   coleccionesindustrial.map(gasto => ( 
                        <Coleccion
                       key={gasto.id} 
                       {...gasto}
                       />
                )) 
            }
            </div> 
             
            <div> 
                <h2>gastos del hogar <i>$:{ suma2.toFixed( 2 ) }</i> </h2>    
            </div> 
            <div> 
            {
                   coleccioneshogar.map(gasto => ( 
                        <Coleccion
                       key={gasto.id} 
                       {...gasto}
                       />
                )) 
            }
            </div> 
            
            <div> 
                <h2>gastos de transporte <i>$:{ suma3.toFixed( 2 ) }</i> </h2>    
            </div> 
            <div> 
            {
                   coleccionestransporte.map(gasto => ( 
                        <Coleccion
                       key={gasto.id} 
                       {...gasto}
                       />
                )) 
            }
            </div> 
            
            <div> 
                <h2>gastos de impuestos <i>$:{ suma4.toFixed( 2 ) }</i> </h2>   
            </div> 
            <div> 
            {
                   coleccionesimpuesto.map(gasto => ( 
                        <Coleccion
                       key={gasto.id} 
                       {...gasto}
                       />
                )) 
            }
            </div>  
            
            
            
            
        </div>
    )
}
