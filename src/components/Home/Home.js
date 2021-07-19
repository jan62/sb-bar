import React from 'react'
import img from '../../img/Слайдер Акции.png'
import Menu from './../Menu/Menu'
import AboutUs from './../AboutUs/AboutUs';
import './Home.css'



 const Home=()=> {
    return (
        <div className="home">
           <h2>HOME</h2>
           <div>
        <img src={img} className="slider"></img>
        </div> 
        <Menu/>
        <AboutUs/>
        </div>
        
    )
}
export default Home
