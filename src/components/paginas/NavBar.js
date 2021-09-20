import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startlogout } from '../../actions/Auth' 
import '../styles/navbar.scss'

export const NavBar = ({handlechange}) => { 

    const dispatch = useDispatch() 

    const {name} = useSelector(state => state.auth)
    
    const handlelogout = () => {
        dispatch(startlogout())
    }

    return (
        <div className="contenedornavabar">  
            <div> 
                <h1>usuario: <h3>{name}</h3> </h1> 
            </div> 
            <div> 
                <label onClick={handlechange}><i className="fa fa-bars"></i> listas de gastos</label>
                <span onClick={handlelogout}><i className="fa fa-arrow-circle-right"></i> logout</span>
            </div>
            
            
        </div>
    )
}
