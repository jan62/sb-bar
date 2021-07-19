import React from 'react'
import{NavLink} from 'react-router-dom'


import logo from '../../img/Лого2.png'
import basket from '../../img/Корзина.png'
import styles from './Header.module.css'

 const Header=()=> {
    
    return (
        
       <div className={styles.header}>
        <div className={styles.navbar}>
         <h2>HEADER COMPONENT</h2>
            
         <NavLink activeClassName={styles.menua} classname={styles.menilink} exact to="/menu"> Меню</NavLink> 
         <NavLink activeClassName={styles.menua} classname={styles.menilink} exact to="/stocks"> Акции</NavLink> 
         <NavLink activeClassName={styles.menua} classname={styles.menilink} exact to="/aboutUs"> О Нас</NavLink>
         <NavLink activeClassName={styles.menua} classname={styles.menilink} exact to="/"><img src={logo} className={styles.img}></img> </NavLink>
         
         <NavLink activeClassName={styles.menua} classname={styles.menilink} exact to="/contacts"> Контакты</NavLink> 
         
         <NavLink activeClassName={styles.menua} classname={styles.menilink} exact to="/logIn"> Войти</NavLink> 
         <NavLink activeClassName={styles.menua} classname={styles.menilink} exact to="/basket">  <img src={basket} className={styles.basket}></img> </NavLink>
       
        </div>
       
        
        </div>
          
        
    )
}
export default Header
