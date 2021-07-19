import React from 'react'
import styles from './Stocks.module.css'
import stake from '../../img/stake1.png'
import filet from '../../img/filet2.png'
import chicken from '../../img/chicken3.png'
import burger from '../../img/burger4.png'
import salmon from '../../img/salmon5.png'
import buffalo from '../../img/buffalo6.png'

export default function Stocks() {
    return (
        <div className={styles.stock}>
           <h1 className={styles.ac}>Акции</h1>
           <div className={styles.maindiv}>
               <div className={styles.stake}>
                   <img src={stake} alt="" />
               </div>

               <div className={styles.act}>
               <div className={styles.firm}>
                   <h4>Фирменный стейк</h4>
                   <p>Описание продукта, особенности, плюсы и<br/> минусы. Описание продукта, особенности,<br/> плюсы и минусы. </p>
               </div>
               <div className={styles.som}>
                   <p className={styles.som1}>1000 сом</p>
                   <p className={styles.som2}>500сом</p>
               </div>
               <div className={styles.korzina}>
                   <button>В КОРЗИНУ</button>
                   <p>349</p>
               </div>
               </div>
           </div> 

           <div className={styles.maindiv2}>
               

           <div className={styles.act}>
               <div className={styles.firm}>
                   <h4>Филе c булгуром</h4>
                   <p>Описание продукта, особенности, плюсы и<br/> минусы. Описание продукта, особенности,<br/> плюсы и минусы. </p>
               </div>
               <div className={styles.som}>
                   <p className={styles.som1}>1000 сом</p>
                   <p className={styles.som2}>500сом</p>
               </div>
               <div className={styles.korzina}>
                   <button>В КОРЗИНУ</button>
                   <p>349</p>
               </div>
               </div>

               <div className={styles.stake1}>
                   <img src={filet} alt="" />
               </div>
              
           </div>

           <div className={styles.maindiv}>
               <div className={styles.stake}>
                   <img src={chicken} alt="" />
               </div>

               <div className={styles.act}>
               <div className={styles.firm}>
                   <h4>Цыпленок с бобами</h4>
                   <p>Описание продукта, особенности, плюсы и<br/> минусы. Описание продукта, особенности,<br/> плюсы и минусы. </p>
               </div>
               <div className={styles.som}>
                   <p className={styles.som1}>1000 сом</p>
                   <p className={styles.som2}>500сом</p>
               </div>
               <div className={styles.korzina}>
                   <button>В КОРЗИНУ</button>
                   <p>349</p>
               </div>
               </div>
           </div> 

           
           <div className={styles.maindiv2}>
               

           <div className={styles.act}>
               <div className={styles.firm}>
                   <h4>Mega Burger</h4>
                   <p>Описание продукта, особенности, плюсы и<br/> минусы. Описание продукта, особенности,<br/> плюсы и минусы. </p>
               </div>
               <div className={styles.som}>
                   <p className={styles.som1}>1000 сом</p>
                   <p className={styles.som2}>500сом</p>
               </div>
               <div className={styles.korzina}>
                   <button>В КОРЗИНУ</button>
                   <p>349</p>
               </div>
               </div>
               <div className={styles.stake1}>
                   <img src={burger} alt="" />
               </div>
              
           </div> 

           <div className={styles.maindiv}>
               <div className={styles.stake}>
                   <img src={salmon} alt="" />
               </div>

               <div className={styles.act}>
               <div className={styles.firm}>
                   <h4>Филе Salmon</h4>
                   <p>Описание продукта, особенности, плюсы и<br/> минусы. Описание продукта, особенности,<br/> плюсы и минусы. </p>
               </div>
               <div className={styles.som}>
                   <p className={styles.som1}>1000 сом</p>
                   <p className={styles.som2}>500сом</p>
               </div>
               <div className={styles.korzina}>
                   <button>В КОРЗИНУ</button>
                   <p>349</p>
               </div>
               </div>
           </div> 

           
           <div className={styles.maindiv2}>
               

           <div className={styles.act}>
               <div className={styles.firm}>
                   <h4>Куринные крылья Buffalo</h4>
                   <p>Описание продукта, особенности, плюсы и<br/> минусы. Описание продукта, особенности,<br/> плюсы и минусы. </p>
               </div>
               <div className={styles.som}>
                   <p className={styles.som1}>1000 сом</p>
                   <p className={styles.som2}>500сом</p>
               </div>
               <div className={styles.korzina}>
                   <button>В КОРЗИНУ</button>
                   <p>349</p>
               </div>
               </div>

               <div className={styles.stake1}>
                   <img src={buffalo} alt="" />
               </div>
              
           </div> 
        </div>
    )
}
