import React from 'react'; 

import '../styles/sumatotalmes.scss';



export const SumaTotalMes = ({sumaTotal}) => { 

    
    
    
    //const {suma} = useSelector(state => state.gastos)  

    

   
    
    

    return (
        <div className="contenedormes">
            <div> 
                <h1><i className="fa fa-calculator"></i> suma total</h1>
            </div> 
            <div > <h1>$:{sumaTotal}</h1></div>
        </div>
    )
}
