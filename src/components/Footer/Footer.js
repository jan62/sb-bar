import React from 'react'
import styles from './Footer.module.css'
import logo from '../../img/Лого2.png'
import inst from '../../img/inst.png'
import wa from '../../img/wa.png'
import fb from '../../img/fb.png'

export default function Footer() {
    return (
        <div className={styles.footer}>
        <div className={styles.logo}>
        <img src={logo} ></img>
        </div>
        <div className={styles.jobb}>
            <div сlassName={styles.job}>
                <strong>Режим Работы</strong>
                <p>с 10.00 до 20.00  </p>
                <p>Сб,Вс-выходной</p>
            </div>
            <div className={styles.job}>
                <strong>Телефон</strong>
                <p>+996(0553)577-575</p> 
                <p>+996(0773)577-575</p>
            </div>
            <div className={styles.job}>
                <strong>Адрес</strong>
                <p>г.Бишкек, Медерова, 50/2</p>
            </div>
            </div>
            
                <div className={styles.wa}>
                    <img src={inst} alt="" />
                    <img src={wa} alt="" />
                    
                    <img src={fb} alt="" />               
                </div>
           
        </div>
    )
}
