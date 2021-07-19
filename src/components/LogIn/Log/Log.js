import React from 'react'

import styles from './LogIn.module.css'

import { NavLink } from 'react-router-dom'



export default function LogIn() {
    return (
        <div>
        <div className={styles.logIn}>
        
           <div >
               <div className={styles.log}>
               <NavLink exact to="/login">ВХОД</NavLink> 
        <NavLink exact to="/signin">РЕГИСТРАЦИЯ</NavLink>  
                   
                   </div>
               </div>
               <div className={styles.inputt}>
               <div>
                   <div>
                   <p>Ваша электронная почта</p>
                    <input type="text" placeholder="Введите ваш адрес эл.почты" />
                   </div>
                   <div className={styles.password}>
                        <p>Ваш пароль</p>
                        <input type="text" placeholder="Введите ваш пароль" />
                   </div>
                   </div>
               </div>
              
               <div className={styles.recognize}>
               <button className={styles.blank}></button>
                   <p>Запомнить меня</p>
                   <p>Забыли пароль?</p>
               </div>
               <div className={styles.but}>
                   <button  >
                       ВОЙТИ
                   </button>
               </div>
               <div className={styles.wine}></div>
               
           </div> 
           
           
        </div>
        
    )
}
